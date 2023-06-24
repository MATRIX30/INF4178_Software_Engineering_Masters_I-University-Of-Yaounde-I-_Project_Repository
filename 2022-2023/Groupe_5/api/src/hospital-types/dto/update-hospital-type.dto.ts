import {
    IsNotEmpty,
    IsString,
    MinLength,
} from 'class-validator';

export class UpdateHospitalTypeDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    readonly label: string;
}