import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Followers, Prisma } from '@prisma/client';

@Injectable()
export class FollowersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FollowersCreateInput): Promise<Followers> {
    return await this.prisma.followers.create({ data });
  }

  async findAll(): Promise<Followers[]> {
    return await this.prisma.followers.findMany();
  }

  async findOne(id: number): Promise<Followers> {
    return await this.prisma.followers.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateFollowerDto): Promise<Followers> {
    return await this.prisma.followers.update({ data, where: { id } });
  }

  async remove(id: number): Promise<Followers> {
    return await this.prisma.followers.findUnique({ where: { id } });
  }
}
