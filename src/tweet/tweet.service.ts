import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Tweet } from '@prisma/client';

@Injectable()
export class TweetService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    return await this.prisma.tweet.create({ data });
  }

  async findAll(): Promise<Tweet[]> {
    return this.prisma.tweet.findMany();
  }

  async findOne(id: number): Promise<Tweet> {
    return await this.prisma.tweet.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateTweetDto) {
    return await this.prisma.tweet.update({data, where: { id } });
  }

  async remove(id: number): Promise<Tweet> {
    return await this.prisma.tweet.delete({ where: { id } });
  }
}