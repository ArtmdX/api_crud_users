import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public create(userData: UserModel) {}

  public getAll(): UserModel[] {}
}
