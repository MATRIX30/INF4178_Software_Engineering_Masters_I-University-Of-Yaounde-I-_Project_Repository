import { CreateEfficiencyHospitalData } from './../type/index';
import { Efficiency } from '../models';

export abstract class IEfficiencyRepository {
    abstract create(data: CreateEfficiencyHospitalData): Promise<Efficiency>;
    abstract findOneById(id: string): Promise<Efficiency | null>;
    abstract findOneByHospital(idH: string): Promise<Efficiency | null>;
    abstract findAll(): Promise<Efficiency[]>;
    abstract update(id: string, data: Partial<Efficiency>): Promise<Efficiency>;
    abstract delete(id: string): Promise<void>;
}
