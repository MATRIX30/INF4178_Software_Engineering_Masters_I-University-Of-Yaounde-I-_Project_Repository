import { Node } from 'src/common/models';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class User extends Node {
  @Column()
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: false })
  hash: string;
}
