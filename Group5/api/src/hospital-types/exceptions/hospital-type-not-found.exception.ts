import { NotFoundException } from '@nestjs/common';

export class HospitalTypeNotFoundException extends NotFoundException {
  constructor() {
    super('Hospital type not found.');
  }
}
