import { HospitalType } from '../models';

export type CreateHospitalTypedata = Omit<
  HospitalType,
  'id' | 'createdAt' | 'updatedAt'
>;
