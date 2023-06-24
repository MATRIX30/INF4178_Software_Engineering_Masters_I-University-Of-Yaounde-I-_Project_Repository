import { HospitalNotFoundException } from './../hospitals/exceptions/hospital-not-found.exception';
import { HospitalsService } from './../hospitals/hospitals.service';
import { UpdateEfficienceDto } from './dto/update-efficiences.dto';
import { CreateEfficienceDto } from './dto/create-efficiences.dto';
import { Injectable } from '@nestjs/common';
import { IEfficiencyRepository } from './interfaces';
import { EfficienceNotFoundException } from './exceptions';
import { CreateEfficiencyHospitalData } from './type';

@Injectable()
export class EfficienceService {
  constructor(
    private readonly efficienceRepository: IEfficiencyRepository,
    private readonly hospitalService: HospitalsService,
  ) {}

  async create(dto: CreateEfficienceDto) {
    const hospital = await this.hospitalService.findOneById(dto.idHospital);

    if (!hospital) throw new HospitalNotFoundException();

    const data: CreateEfficiencyHospitalData = {
      date: dto.date,
      percentage: dto.percentage,
      hospitalId: dto.idHospital,
    };

    const createdEfficiency = await this.efficienceRepository.create(data);

    return createdEfficiency;
  }

  findAll() {
    return this.efficienceRepository.findAll();
  }

  async findOneById(id: string) {
    const efficience = await this.efficienceRepository.findOneById(id);

    if (!efficience) throw new EfficienceNotFoundException();

    return efficience;
  }

  async update(id: string, data: UpdateEfficienceDto) {
    await this.findOneById(id);

    return this.efficienceRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findOneById(id);

    return this.efficienceRepository.delete(id);
  }
}
