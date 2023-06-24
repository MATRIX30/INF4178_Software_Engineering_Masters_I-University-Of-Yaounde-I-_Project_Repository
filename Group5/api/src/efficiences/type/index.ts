import { Efficiency } from '../models';

export interface CreateEfficiencyHospitalData {
  percentage: number;
  date: Date;
  hospitalId: string
}