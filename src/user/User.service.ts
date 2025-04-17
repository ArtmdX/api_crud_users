import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './User.schema';
import { CreateUserDto } from './DTO/CreateUser.dto';
import { UpdateUserDto } from './DTO/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(dto: CreateUserDto): Promise<any> {
    const user = await new this.userModel(dto).save();
    return this.userModel.findById(user._id).lean(); // garante retorno plano com id
  }

  async findAll(): Promise<any[]> {
    return this.userModel.find().lean();
  }

  async findOne(id: string): Promise<any> {
    const user = await this.userModel.findById(id).lean();
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async update(id: string, dto: UpdateUserDto): Promise<any> {
    const user = await this.userModel
      .findByIdAndUpdate(id, dto, { new: true })
      .lean();
    if (!user) throw new NotFoundException('Usuário não encontrado');
    return user;
  }

  async remove(id: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('Usuário não encontrado');
  }
}
