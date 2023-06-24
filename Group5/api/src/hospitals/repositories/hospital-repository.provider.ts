import { Injectable, Provider } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hospital } from '../models';
import { Repository } from 'typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HospitalDataSource } from '../enums';
import { TypeOrmHospitalRepository } from './implementations';
import { HOSPITAL_REPOSITORY_TOKEN } from './hospital-repository.interface';
import { HospitalTypesService } from 'src/hospital-types/hospital-types.service';

export function provideHospitalsRepository(): Provider[] {
  return [
    {
      provide: HOSPITAL_REPOSITORY_TOKEN,
      useFactory: async (
        dependenciesProvider: HospitalRepoDependenciesProvider,
      ) => provideHospitalRepositoryFactory(dependenciesProvider),
      inject: [HospitalRepoDependenciesProvider],
    },
    HospitalRepoDependenciesProvider,
  ];
}

async function provideHospitalRepositoryFactory(
  dependenciesProvider: HospitalRepoDependenciesProvider,
) {
  await ConfigModule.envVariablesLoaded;

  switch (process.env.HOSPITALS_DATASOURCE) {
    case HospitalDataSource.TYPEORM:
      return new TypeOrmHospitalRepository(
        dependenciesProvider.hospitalRepository,
        dependenciesProvider.hospitalTypeService,
      );
    case HospitalDataSource.MEMORY:
      return null; // implement memory here
    default:
      return new TypeOrmHospitalRepository(
        dependenciesProvider.hospitalRepository,
        dependenciesProvider.hospitalTypeService,
      );
  }
}

@Injectable()
export class HospitalRepoDependenciesProvider {
  constructor(
    @InjectRepository(Hospital)
    public readonly hospitalRepository: Repository<Hospital>,
    public readonly configService: ConfigService,
    public readonly hospitalTypeService: HospitalTypesService,
  ) {}
}
