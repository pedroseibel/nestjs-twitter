import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateTweetDto {
    @IsString()
    @IsNotEmpty()
    content: string;
    @IsNotEmpty()
    @IsNumber()
    userid: number;
}