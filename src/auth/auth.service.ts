import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service'; 
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor (private readonly userService: UserService) {}

    async login(loginUserDto: LoginDto) {
        const user = await this.userService.findByLogin(loginUserDto);

        return;
    }
}
