
import { Injectable } from '@nestjs/common';
import { CreateFollowingDto } from './dto/create-following.dto';
import { UpdateFollowingDto } from './dto/update-following.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Following, Prisma } from '@prisma/client';

@Injectable()
export class FollowingService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.FollowingCreateInput): Promise<Following> {
    return await this.prisma.following.create({ data })
  }

  async findAll(): Promise<Following[]> {
    return await this.prisma.following.findMany();
  }

  async findOne(id: number): Promise<Following> {
    return await this.prisma.following.findUnique({ where: { id } });
  }

  async update(id: number, data): Promise<Following> {
    return await this.prisma.following.update({ data, where: { id } })};

  async remove(id: number): Promise<Following> {
    return await this.prisma.following.delete({ where: { id } });
  }
}