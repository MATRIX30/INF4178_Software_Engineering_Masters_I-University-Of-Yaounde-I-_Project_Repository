import { Hospital } from './../../hospitals/models/hospital.model';

import { Node } from 'src/common/models';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Efficiency extends Node {
  @Column({ nullable: false })
  percentage: number;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @ManyToOne(() => Hospital, (hospital) => hospital.id)
  hospital: Hospital;
}
