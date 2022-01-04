import { isNotEmpty, IsNotEmpty, isNumber, IsNumber } from "class-validator";

export class CreateFollowingDto {

    @IsNotEmpty()
    @IsNumber()
    followingId: number;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}