import { ForbiddenException } from '@nestjs/common';

export class EfficiencyAlreadyExistsException extends ForbiddenException {
  constructor() {
    super('At this period and efficient exist for that hospital');
  }
}