import { IsNotEmpty, IsInt } from "class-validator";

export class CreateFollowerDto {
    @IsNotEmpty()
    @IsInt()
    followerId: number;

    @IsNotEmpty()
    @IsInt()
    userId: number;
}
