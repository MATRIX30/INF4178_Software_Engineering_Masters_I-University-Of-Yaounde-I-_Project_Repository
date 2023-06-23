import { Hospital } from 'src/hospitals/models';
import {
  Column,
  CreateDateColumn,
  OneToMany,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// export class HospitalType extends Node {
export class HospitalType {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ unique: true, nullable: false })
  label: string;

  @OneToMany(() => Hospital, (hospital) => hospital.hospitalType)
  hospitals?: Hospital[];
}
