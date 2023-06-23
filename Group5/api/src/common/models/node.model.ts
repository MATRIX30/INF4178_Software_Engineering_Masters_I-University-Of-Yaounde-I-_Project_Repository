import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BasicNode {
  @CreateDateColumn()
  readonly createdAt: Date;

  @UpdateDateColumn()
  readonly updatedAt: Date;
}

export abstract class Node extends BasicNode {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
}
