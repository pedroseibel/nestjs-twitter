export class CreateTweetDto {
    id: number;
    userId: number;
    text: string;
    emoji: string;
    likes: number;
    createdAt: Date;
}
