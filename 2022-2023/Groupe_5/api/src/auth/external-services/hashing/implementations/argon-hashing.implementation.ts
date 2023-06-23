import * as argon2 from 'argon2';
import { IHashing } from '../hashing.interface';

export class ArgonHashing implements IHashing {
  hash(text: string): Promise<string> {
    return argon2.hash(text);
  }
  compare(hashedValue: string, text: string): Promise<boolean> {
    return argon2.verify(hashedValue, text);
  }
}
