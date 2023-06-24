import { NotFoundException } from '@nestjs/common';

export class HospitalNotFoundException extends NotFoundException {
  constructor() {
    super('Hospital not found.');
  }
}
