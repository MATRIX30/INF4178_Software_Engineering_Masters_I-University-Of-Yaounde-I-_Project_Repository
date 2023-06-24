import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PaginateDto {
  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(1000)
  @Type(() => Number)
  readonly offset?: number = 0;

  @IsNumber()
  @IsOptional()
  @Max(20)
  @Min(1)
  @Type(() => Number)
  readonly limit?: number = 20;
}
