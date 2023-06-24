import { Inject, Injectable } from '@nestjs/common';
import { CreateHospitalDto, UpdateHospitalDto } from './dto';
import {
  HospitalAlreadyExistsException,
  HospitalNotFoundException,
} from './exceptions';
import { CreateHospitaldata } from './types';
import { PaginateDto } from 'src/common/dto';
import { HOSPITAL_REPOSITORY_TOKEN, IHospitalRepository } from './repositories';
import { HospitalTypesService } from 'src/hospital-types/hospital-types.service';
import { AhpService } from 'src/ahp/ahp.service';
import { AHPCriteriaHospitalDto } from './dto/ahp-criterias-hostpital.dto';

@Injectable()
export class HospitalsService {
  constructor(
    @Inject(HOSPITAL_REPOSITORY_TOKEN)
    private readonly hospitalRepository: IHospitalRepository,
    private readonly hospitalTypeService: HospitalTypesService,
    private readonly ahpService: AhpService,
  ) {}

  async create(dto: CreateHospitalDto, image: string) {
    await this.hospitalTypeService.findOneById(dto.hospitalTypeId);

    const hospitalExists = await this.hospitalRepository.findOneByName(
      dto.name,
    );

    if (hospitalExists) throw new HospitalAlreadyExistsException();

    const data: CreateHospitaldata = { ...dto, photo: image };

    const createdHospital = await this.hospitalRepository.create(data);

    return createdHospital;
  }

  findAll(paginate: PaginateDto) {
    return this.hospitalRepository.findAll(paginate);
  }

  async findWithAhp(dto: AHPCriteriaHospitalDto) {
    const hospitalByUserCity = await this.hospitalRepository.findOneByCity(
      dto.city,
    );

    const hospitals = hospitalByUserCity.map((h) => {
      const distance = this.ahpService.getDistanceBetweenLocations(
        {
          longitude: +h.longitude,
          latitude: +h.latitude,
        },
        {
          longitude: +dto.userLongitude,
          latitude: +dto.userLatitude,
        },
      );

      switch (h.hospitalType.label) {
        case 'public':
          return { ...h, typeNum: 4, distance };
        case 'prive':
          return { ...h, typeNum: 3, distance };
        case 'clinique':
          return { ...h, typeNum: 2, distance };

        default:
          return { ...h, typeNum: 1, distance };
      }
    });

    const { city, userLatitude, userLongitude, ...criterias } = dto;

    const criteriaWeights = this.ahpService.getCriteriaWeights(criterias);

    const hospitalWithTotalWeight = hospitals.map((hospital) => {
      const totalWeight =
        hospital.typeNum * criteriaWeights['type'] +
        hospital.distance * criteriaWeights['distance'] +
        hospital.cost * criteriaWeights['price'];

      return {
        ...hospital,
        totalWeight: this.ahpService.take2NumberFalterComma(totalWeight),
      };
    });

    hospitalWithTotalWeight.sort((h1, h2) => h2.totalWeight - h1.totalWeight);

    const hospitalsResult = hospitalWithTotalWeight.map(
      ({ typeNum, distance, totalWeight, ...hospitalDataToDisplay }) =>
        hospitalDataToDisplay,
    );

    return hospitalsResult.slice(0, 5);
  }

  async findOneById(id: string) {
    const hospital = await this.hospitalRepository.findOneById(id);

    if (!hospital) throw new HospitalNotFoundException();

    return hospital;
  }

  async update(id: string, data: UpdateHospitalDto) {
    await this.findOneById(id);

    return this.hospitalRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findOneById(id);

    return this.hospitalRepository.delete(id);
  }
}
