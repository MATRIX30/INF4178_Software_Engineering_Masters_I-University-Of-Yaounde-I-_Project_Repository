import { Efficiency } from './../../efficiences/models/efficiences.model';
import { Node } from 'src/common/models';
import { HospitalType } from 'src/hospital-types/models';
import { Column, ManyToOne, Entity, OneToMany } from 'typeorm';

@Entity()
export class Hospital extends Node {
  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  notice?: string;

  @Column({ nullable: true })
  photo?: string;

  @Column({ nullable: true })
  website?: string;

  @Column('double')
  latitude: number;

  @Column('double')
  longitude: number;

  @Column()
  cost: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column({ nullable: true })
  postalCode?: string;

  @ManyToOne(() => HospitalType, (hospital) => hospital.hospitals)
  hospitalType?: HospitalType;

  @OneToMany(() => Efficiency, (efficiency) => efficiency.id)
  efficiencies?: Efficiency[];
}
