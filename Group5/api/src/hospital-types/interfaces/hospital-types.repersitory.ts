import { PaginateResponse } from 'src/common/types';
import { PaginateDto } from 'src/common/dto';
import { HospitalType } from '../models/hospital-type.model';
import { CreateHospitalTypedata } from '../types';


export abstract class IHospitalTypeRepository {
    abstract create(data: CreateHospitalTypedata): Promise<HospitalType>;
    abstract findOneById(id: string): Promise<HospitalType | null>;
    abstract findOneByLabel(label: string): Promise<HospitalType | null>;
    abstract findAll(): Promise<HospitalType[]>;
    abstract update(id: string, data: Partial<HospitalType>): Promise<HospitalType>;
    abstract delete(id: string): Promise<void>;
  }
  