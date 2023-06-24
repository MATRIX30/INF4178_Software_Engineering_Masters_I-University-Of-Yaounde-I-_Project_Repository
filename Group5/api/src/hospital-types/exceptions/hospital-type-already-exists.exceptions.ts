import { ForbiddenException } from '@nestjs/common';

export class HospitalTypeAlreadyExistsException extends ForbiddenException {
  constructor() {
    super('Hospital type already exists.');
  }
}
