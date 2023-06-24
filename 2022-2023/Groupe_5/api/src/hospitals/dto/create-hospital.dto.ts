import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';

export class CreateHospitalDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly notice?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly photo?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly website?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly latitude: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  readonly longitude: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty()
  readonly cost: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  readonly street: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  readonly city: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  readonly postalCode?: string;

  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  readonly hospitalTypeId: string;
}
