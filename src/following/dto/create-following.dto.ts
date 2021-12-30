import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFollowingDto {

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}