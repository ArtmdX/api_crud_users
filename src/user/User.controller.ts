import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './User.service';
import { CreateUserDto } from './DTO/CreateUser.dto';
import { UpdateUserDto } from './DTO/UpdateUser.dto';
import { User } from './User.schema';
import { plainToInstance } from 'class-transformer';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto) {
    const user = await this.userService.create(dto);
    return plainToInstance(User, user);
  }

  @Get()
  async findAll() {
    try {
      const users = await this.userService.findAll();
      if (Array.isArray(users)) {
        return users.map((user) => plainToInstance(User, user));
      }
      throw new Error('Failed to retrieve users');
    } catch (e) {
      console.log(e);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    return plainToInstance(User, user);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    const user = await this.userService.update(id, dto);
    return plainToInstance(User, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    this.userService.remove(id);
  }
}
