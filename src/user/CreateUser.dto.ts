import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  nome: string;

  @IsEmail(undefined, { message: 'O email está incorreto.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  email: string;

  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  senha: string;
}
