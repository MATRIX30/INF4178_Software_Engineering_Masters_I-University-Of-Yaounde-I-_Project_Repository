import { Module } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { HospitalsController } from './hospitals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from './models';
import { provideHospitalsRepository } from './repositories/hospital-repository.provider';
import { HospitalTypesModule } from 'src/hospital-types/hospital-types.module';
import { AhpModule } from 'src/ahp/ahp.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hospital]),
    HospitalTypesModule,
    AhpModule,
  ],
  controllers: [HospitalsController],
  providers: [HospitalsService, ...provideHospitalsRepository()],
  exports: [HospitalsService],
})
export class HospitalsModule {}
