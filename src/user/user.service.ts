import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService){}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    data.password = await bcrypt.hash(data.password, 10);
    return await this.prisma.user.create({ data });
  }

  async findByLogin(login: CreateUserDto): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: login.email,
      },
    });
    
    if(!user){
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const equalPassword = await bcrypt.compare(login.password, user.password);
    
    if (!equalPassword) {
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
