import { HospitalsModule } from './../hospitals/hospitals.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Efficiency } from './models';
import { EfficiencyController } from './efficiences.controller';
import { EfficienceService } from './efficiences.services';
import { IEfficiencyRepository } from './interfaces';
import { TypeOrmEfficiencyRepository } from './repersitory/typeorm-efficiences.repersitory';

@Module({
  imports: [TypeOrmModule.forFeature([Efficiency]), HospitalsModule],
  controllers: [EfficiencyController],

  providers: [
    EfficienceService,
    {
      provide: IEfficiencyRepository,
      useClass: TypeOrmEfficiencyRepository,
    },
  ],
})
export class EfficiencyTypesModule {}
