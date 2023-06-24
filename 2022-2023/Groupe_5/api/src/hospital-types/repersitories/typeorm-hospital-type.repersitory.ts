import { Injectable } from '@nestjs/common';
import { HospitalType } from '../models';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHospitalTypedata } from '../types';
import { IHospitalTypeRepository } from '../interfaces/hospital-types.repersitory';

@Injectable()
export class TypeOrmHospitalTypeRepository implements IHospitalTypeRepository {
  constructor(
    @InjectRepository(HospitalType)
    private readonly repository: Repository<HospitalType>,
  ) {}

  async create(data: CreateHospitalTypedata): Promise<HospitalType> {
    const newHospitalType = new HospitalType();
    
    const hospitalType = Object.assign(newHospitalType, data);
    console.log("id", hospitalType.id)
    const createdHospitalType = await this.repository.save(hospitalType);

    return createdHospitalType;
  }

  async findOneById(id: string): Promise<HospitalType> {
    const hospitaltype = await this.repository.findOne({
      where: {
        id,
      },
    });

    return hospitaltype;
  }

  async findOneByLabel(label: string): Promise<HospitalType> {
    const hospitaltype = await this.repository.findOne({
      where: {
        label,
      },
    });

    return hospitaltype;
  }
  async findAll(): Promise<HospitalType[]> {
    const hospitalTypes = await this.repository.find();
    return hospitalTypes;
  }

  async update(id: string, data: Partial<HospitalType>): Promise<HospitalType> {
    const newHospitalTypes = await this.findOneById(id);

    const updatedHospitalTypes = Object.assign(newHospitalTypes, data);

    const hospitalType = await this.repository.save(updatedHospitalTypes);

    return hospitalType;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
