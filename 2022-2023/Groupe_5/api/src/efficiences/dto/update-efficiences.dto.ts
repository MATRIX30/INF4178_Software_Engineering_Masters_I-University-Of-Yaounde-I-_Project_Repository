import {
    IsDate,
    IsNotEmpty,
    IsNumber,
    IsString,
    Min
} from 'class-validator';

export class UpdateEfficienceDto {
    @IsNumber()
    @IsNotEmpty()
    readonly percentage: number;

    @IsDate()
    @IsNotEmpty()
    readonly date: Date;
}