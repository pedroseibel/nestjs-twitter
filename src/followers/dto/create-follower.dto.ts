import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFollowerDto {
    @IsNotEmpty()
    @IsNumber()
    followerId: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
