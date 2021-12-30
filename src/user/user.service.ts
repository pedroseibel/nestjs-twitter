import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client'
import * as bcrypt from 'bcrypt';
import { JwtPayload } from 'src/auth/jwt.strategy';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

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

  async validateUser(payload: JwtPayload): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: payload.email,
      }
    });

    if(!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    return await this.prisma.user.update({ data, where: { id } });
  }

  async remove(id: number): Promise<User> {
    return await this.prisma.user.delete({ where: { id } });
  }
}
