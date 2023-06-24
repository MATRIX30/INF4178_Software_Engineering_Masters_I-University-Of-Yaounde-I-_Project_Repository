import { TypeOrmHospitalTypeRepository } from './repersitories/typeorm-hospital-type.repersitory';
import { HospitalType } from './models/hospital-type.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { HospitalTypesController } from './hospital-types.controller';
import { HospitalTypesService } from './hospital-types.service';
import { IHospitalTypeRepository } from './interfaces/hospital-types.repersitory';

@Module({
  imports: [TypeOrmModule.forFeature([HospitalType])],
  controllers: [HospitalTypesController],

  providers: [
    HospitalTypesService,
    {
      provide: IHospitalTypeRepository,
      useClass: TypeOrmHospitalTypeRepository,
    },
  ],
  exports: [HospitalTypesService],
})
export class HospitalTypesModule {}
