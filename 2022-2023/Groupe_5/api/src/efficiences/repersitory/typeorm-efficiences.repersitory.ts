import { HospitalsService } from './../../hospitals/hospitals.service';
import { CreateEfficiencyHospitalData } from './../type/index';
import { Inject, Injectable } from '@nestjs/common';
import { Efficiency } from '../models';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IEfficiencyRepository } from '../interfaces';

@Injectable()
export class TypeOrmEfficiencyRepository implements IEfficiencyRepository  {
  constructor(
    @InjectRepository(Efficiency)
    private readonly repository: Repository<Efficiency>,
    private readonly hospitalService: HospitalsService
  ) {}

  async create(data: CreateEfficiencyHospitalData): Promise<Efficiency> {
    const newEfficiency = new Efficiency()

    const hospital = await this.hospitalService.findOneById(data.hospitalId)

    const hospitalEfficiency = Object.assign(newEfficiency, data);

    newEfficiency.hospital = hospital

    const createdEfficiency = await this.repository.save(hospitalEfficiency);
    return createdEfficiency ;
  }

  async findOneById(id: string): Promise<Efficiency> {
    const efficiency = await this.repository.findOne({
      where: {
        id,
      },
    });

    return efficiency;
  }

  async findOneByHospital(idHospital: string): Promise<Efficiency> {
    
    const efficiency = await this.repository.findOne({
      where: {
        // idHospital
      },
    });

    return efficiency;
  }

  async findAll(): Promise<Efficiency[]> {
    const efficiencies = await this.repository.find();
    return efficiencies;
  }

//   for finding exactly three hospitals efficiences
  async findSet(): Promise<Efficiency[]> {
    const efficienciesAll  = await this.findAll()

    const efficiencies = await this.repository.createQueryBuilder('my_table')
        .where(`JSON_LENGTH(my_table.my_array) = :arrayLength`, { arrayLength: 3})
        .andWhere(`my_table.my_array REGEXP :arrayRegExp`, { arrayRegExp: `^${JSON.stringify(efficienciesAll)}$` })
        .getMany();

    return efficiencies;
  }


  async update(id: string, data: Partial<Efficiency>): Promise<Efficiency> {
    const newEfficiency = await this.findOneById(id);

    const updatedEfficiency = Object.assign(newEfficiency, data);

    const hospitalEfficiency = await this.repository.save(updatedEfficiency);

    return hospitalEfficiency;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
