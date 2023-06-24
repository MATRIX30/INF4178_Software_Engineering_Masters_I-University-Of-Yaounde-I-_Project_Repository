import { Injectable } from '@nestjs/common';
import { IHospitalTypeRepository } from './interfaces';
import { CreateHospitalTypeDto } from './dto';
import {
  HospitalTypeAlreadyExistsException,
  HospitalTypeNotFoundException,
} from './exceptions';
import { CreateHospitalTypedata } from './types';
import { UpdateHospitalTypeDto } from './dto/update-hospital-type.dto';

@Injectable()
export class HospitalTypesService {
  constructor(
    private readonly hospitalTypeRepository: IHospitalTypeRepository,
  ) {}

  async create(dto: CreateHospitalTypeDto) {
    const hospitalTypeExists = await this.hospitalTypeRepository.findOneByLabel(
      dto.label,
    );

    if (hospitalTypeExists) throw new HospitalTypeAlreadyExistsException();

    const data: CreateHospitalTypedata = { ...dto };

    const createdHospitalType = await this.hospitalTypeRepository.create(data);

    return createdHospitalType;
  }

  findAll() {
    return this.hospitalTypeRepository.findAll();
  }

  async findOneById(id: string) {
    const hospitalType = await this.hospitalTypeRepository.findOneById(id);

    if (!hospitalType) throw new HospitalTypeNotFoundException();

    return hospitalType;
  }

  async update(id: string, data: UpdateHospitalTypeDto) {
    await this.findOneById(id);

    return this.hospitalTypeRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findOneById(id);

    return this.hospitalTypeRepository.delete(id);
  }
}
