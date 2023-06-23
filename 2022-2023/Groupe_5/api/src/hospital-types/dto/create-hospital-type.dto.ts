import {
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class CreateHospitalTypeDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    readonly label: string;
}
  