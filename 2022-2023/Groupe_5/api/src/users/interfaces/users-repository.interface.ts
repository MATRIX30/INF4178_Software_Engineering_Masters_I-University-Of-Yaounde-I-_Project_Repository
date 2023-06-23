import { User } from '../models';
import { CreateDto } from '../dto/create.dto';

export abstract class IUsersRepository {
  abstract findOneById(id: string): Promise<User | null>;
  abstract findOneByEmail(email: string): Promise<User | null>;
  abstract create(user: CreateDto & { hash: string }): Promise<User>;
}
