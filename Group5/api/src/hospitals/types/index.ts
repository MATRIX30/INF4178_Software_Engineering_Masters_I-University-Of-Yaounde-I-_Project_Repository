import { Hospital } from '../models';

export type CreateHospitaldata = Omit<
  Hospital,
  'id' | 'createdAt' | 'updatedAt'
> &
  Record<'hospitalTypeId', string>;
// export interface CreateHospitaldata {
//   name: string;

//   notice?: string;

//   photo?: string;

//   website?: string;

//   latitude: number;

//   longitude: number;

//   cost: number;

//   street: string;

//   city: string;

//   postalCode?: string;
// }
