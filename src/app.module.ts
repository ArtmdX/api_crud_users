import 'dotenv/config';
import { Module } from '@nestjs/common';
import { UserModule } from './user/User.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(process.env.CONNECTION_STRING || ''),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
