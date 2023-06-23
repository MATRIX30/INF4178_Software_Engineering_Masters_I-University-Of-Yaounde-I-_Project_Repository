import { PaginateDto } from 'src/common/dto';
import { PaginateResponse } from 'src/common/types';
import { Hospital } from 'src/hospitals/models';
import { CreateHospitaldata } from 'src/hospitals/types';
import { Like, Repository } from 'typeorm';
import { IHospitalRepository } from '../hospital-repository.interface';
import { HospitalTypesService } from 'src/hospital-types/hospital-types.service';

export class TypeOrmHospitalRepository implements IHospitalRepository {
  constructor(
    private readonly repository: Repository<Hospital>,
    private readonly hospitalTypeService: HospitalTypesService,
  ) {}
  findOneByCity(city: string): Promise<Hospital[]> {
    return this.repository.find({
      where: {
        city: Like(city),
      },
      relations: {
        hospitalType: true,
      },
    });
  }

  async create(data: CreateHospitaldata): Promise<Hospital> {
    const hospitalType = await this.hospitalTypeService.findOneById(
      data.hospitalTypeId,
    );

    const newHospital = new Hospital();

    newHospital.hospitalType = hospitalType;

    const hospital = Object.assign(newHospital, data);

    const createdHospital = await this.repository.save(hospital);

    return createdHospital;
  }

  findOneById(id: string): Promise<Hospital> {
    return this.repository.findOne({
      where: {
        id,
      },
      relations: {
        hospitalType: true,
      },
    });
  }

  async findOneByName(name: string): Promise<Hospital> {
    const hospital = await this.repository.findOne({
      where: {
        name,
      },
    });

    return hospital;
  }

  async findAll({
    offset,
    limit,
  }: PaginateDto): Promise<PaginateResponse<Hospital>> {
    const hospitals = await this.repository.find({
      skip: offset,
      take: limit,
      relations: {
        hospitalType: true,
      },
    });

    const totalCount = await this.repository.count();

    return {
      hasMore: limit - offset < totalCount,
      totalCount,
      data: hospitals,
    };
  }

  async update(id: string, data: Partial<Hospital>): Promise<Hospital> {
    const newHospital = await this.findOneById(id);

    const updatedDistrict = Object.assign(newHospital, data);

    const hospital = await this.repository.save(updatedDistrict);

    return hospital;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
