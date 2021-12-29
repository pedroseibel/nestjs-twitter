import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFollowingDto {
    @IsNotEmpty()
    @IsInt()
    followingId: number;
    
    @IsNotEmpty()
    @IsInt()
    userId: number;
}