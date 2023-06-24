import { ForbiddenException } from '@nestjs/common';

export class HospitalAlreadyExistsException extends ForbiddenException {
  constructor() {
    super('Hospital already exists.');
  }
}
