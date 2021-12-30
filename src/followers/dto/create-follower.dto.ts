import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateFollowerDto {

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
