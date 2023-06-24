import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class AHPCriteriaHospitalDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  readonly distance: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  readonly popularity: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  readonly type: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  readonly city: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly userLatitude: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly userLongitude: number;
}
