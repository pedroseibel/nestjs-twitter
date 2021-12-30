import { IsDate, IsNumber, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateTweetDto {
    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsNotEmpty()
    @IsString()
    @Max(280)
    text: string;

    @IsNotEmpty()
    @IsString()
    emoji: string;

    @IsNumber()
    likes: number;

    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}