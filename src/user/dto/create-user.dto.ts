import { IsNotEmpty, IsString, IsEmail, IsDateString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsDateString()
    birthday: string | Date;

    @IsString()
    image: string;

    @IsString()
    bio: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
