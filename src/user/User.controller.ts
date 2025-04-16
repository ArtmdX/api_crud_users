import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './User.service';
import { CreateUserDTO } from './CreateUser.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll(): Promise<UserModel[]> {
    const users = this.userService.getAll();
    return users;
  }

  @Post()
  async create(@Body() userData: CreateUserDTO) {}
}
