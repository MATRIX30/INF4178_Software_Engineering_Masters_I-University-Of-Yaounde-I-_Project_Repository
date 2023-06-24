import { PaginateDto } from 'src/common/dto';
import { Hospital } from '../models';
import { CreateHospitaldata } from '../types';
import { PaginateResponse } from 'src/common/types';

export interface IHospitalRepository {
  create(data: CreateHospitaldata): Promise<Hospital>;
  findOneById(id: string): Promise<Hospital | null>;
  findOneByName(name: string): Promise<Hospital | null>;
  findOneByCity(city: string): Promise<Hospital[]>;
  findAll(paginate?: PaginateDto): Promise<PaginateResponse<Hospital>>;
  update(id: string, data: Partial<Hospital>): Promise<Hospital>;
  delete(id: string): Promise<void>;
}

export const HOSPITAL_REPOSITORY_TOKEN = 'hospital-repository-token';
