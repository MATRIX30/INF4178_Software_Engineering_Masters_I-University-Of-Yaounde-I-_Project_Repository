import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUUID,
} from 'class-validator';

export class CreateEfficienceDto {
    @IsNumber()
    @IsNotEmpty()
    readonly percentage: number;

    @IsDate()
    @IsNotEmpty()
    date: Date;

    @IsUUID()
    @IsNotEmpty()
    idHospital: string;
}