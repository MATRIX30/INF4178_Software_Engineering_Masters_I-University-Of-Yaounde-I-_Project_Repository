import { NotFoundException } from '@nestjs/common';

export class EfficienceNotFoundException extends NotFoundException {
  constructor() {
    super('Hospital does not know about that efficiency.');
  }
}
