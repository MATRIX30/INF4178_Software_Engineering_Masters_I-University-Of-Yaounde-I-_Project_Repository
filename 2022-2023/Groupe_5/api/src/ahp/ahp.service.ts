import { Injectable } from '@nestjs/common';
import { AHPCriteriaHospitalDto } from 'src/hospitals/dto';

import { getPreciseDistance } from 'geolib';

type GeoPosition = {
  latitude: number;
  longitude: number;
};

type AHPCreterias = Pick<
  AHPCriteriaHospitalDto,
  'distance' | 'popularity' | 'price' | 'type'
>;

@Injectable()
export class AhpService {
  getCriteriaWeights(criterias: AHPCreterias) {
    const sortedCriterias = this.sortByPriority(Object.entries(criterias));

    const criteriasVector = sortedCriterias.map((c) => c[0]);

    const pairwiseMatrix: number[][] = [];
    let pairwiseMatrixSum = [];
    let criteriaWeights = [];
    let normalizedPairwiseMatrix: number[][] = [];

    const MATRIX_SIZE = criteriasVector.length;

    for (let i = 0; i < MATRIX_SIZE; i++) {
      const row: number[] = [];

      for (let j = 0; j < MATRIX_SIZE; j++) {
        if (i === j) row.push(1);
        else row.push(0);

        if (j > i) {
          row[j] = row[j - 1] + 2;
        }

        if (j < i) {
          row[j] = this.take2NumberFalterComma(1 / pairwiseMatrix[j][i]);
        }
      }

      pairwiseMatrix.push(row);
    }

    pairwiseMatrixSum = this.computePairwiseMatrixSum(pairwiseMatrix);
    normalizedPairwiseMatrix = this.normalisePairwiseMatrix(
      pairwiseMatrix,
      pairwiseMatrixSum,
    );
    criteriaWeights = this.computeWaitedCriteria(normalizedPairwiseMatrix);

    console.log({ pairwiseMatrix });
    console.log({ pairwiseMatrixSum });
    console.log({ normalizedPairwiseMatrix });
    console.log({ criteriaWeights });

    let criteriaWeightAndProperty = {};

    for (let i = 0; i < criteriaWeights.length; ++i) {
      criteriaWeightAndProperty = {
        ...criteriaWeightAndProperty,
        [sortedCriterias[i][0]]: criteriaWeights[i],
      };
    }

    return criteriaWeightAndProperty;
  }

  private sortByPriority(criterias: [string, number][]) {
    const sortedCriterias = criterias.sort(
      (firstCriteria, secondCriteria) => firstCriteria[1] - secondCriteria[1],
    );

    return sortedCriterias;
  }

  private computePairwiseMatrixSum(pairwiseMatrix: number[][]) {
    const SUM = new Array(pairwiseMatrix.length).fill(0);

    for (let i = 0; i < pairwiseMatrix.length; ++i) {
      for (let j = 0; j < pairwiseMatrix[i].length; ++j) {
        SUM[j] += pairwiseMatrix[i][j];
      }
    }

    return SUM;
  }

  private normalisePairwiseMatrix(
    pairwiseMatrix: number[][],
    pairwiseMatrixSum: number[],
  ) {
    const normalisedPairwiseMatrix: number[][] = [];

    for (let i = 0; i < pairwiseMatrix.length; ++i) {
      const row: number[] = [];

      for (let j = 0; j < pairwiseMatrix[i].length; ++j) {
        const normalisedValue = this.take2NumberFalterComma(
          pairwiseMatrix[i][j] / pairwiseMatrixSum[j],
        );

        row.push(normalisedValue);
      }

      normalisedPairwiseMatrix.push(row);
    }

    return normalisedPairwiseMatrix;
  }

  private computeWaitedCriteria(normalisedPairwiseMatrix: number[][]) {
    const criteriaWeights = [];

    for (const row of normalisedPairwiseMatrix) {
      const someRowValues = row.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      );

      const averageRow = someRowValues / normalisedPairwiseMatrix.length;

      criteriaWeights.push(this.take2NumberFalterComma(averageRow));
    }

    return criteriaWeights;
  }

  public take2NumberFalterComma(value: number) {
    return +value.toFixed(2);
  }

  /**
   * Calculates the distance btw two points
   * @param hospitalPosition The hospital position
   * @param userPosition The user current position
   * @returns number
   */
  public getDistanceBetweenLocations(
    hospitalPosition: GeoPosition,
    userPosition: GeoPosition,
  ) {
    return getPreciseDistance(hospitalPosition, userPosition);
  }
}
