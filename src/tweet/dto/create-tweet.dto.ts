import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";

export class CreateTweetDto {
    @IsNotEmpty()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsString()
    @Max(280)
    text: string;

    @IsNotEmpty()
    @IsString()
    emoji: string;

    @IsNotEmpty()
    @IsInt()
    likes: number;

    @IsNotEmpty()
    @IsDate()
    createdAt: Date;
}