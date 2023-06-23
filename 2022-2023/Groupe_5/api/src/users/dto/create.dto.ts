import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class CreateDto {
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(6)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  avatar?: string;
}
