import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateHospitalDto {
  @IsString()
  @IsOptional()
  @MinLength(5)
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly notice?: string;

  @IsString()
  @IsOptional()
  readonly photo?: string;

  @IsString()
  @IsOptional()
  readonly website?: string;

  @IsNumber()
  @IsOptional()
  readonly latitude: number;

  @IsNumber()
  @IsOptional()
  readonly longitude: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  readonly cost: number;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly street: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  readonly city: string;

  @IsString()
  @IsOptional()
  readonly postalCode?: string;
}
