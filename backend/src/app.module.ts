import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { User } from './entities/user.entity';
import { TopicService } from './services/topic.service';
import { TopicController } from './controllers/topic.controller';
import { Topic } from './entities/topic.entity';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'materdei',
      signOptions: {expiresIn: '24h'}
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023',
      synchronize: true,
      entities: [User,Topic]
    }),
    TypeOrmModule.forFeature([User,Topic])
  ],
  controllers: [
    AppController, 
    ProfileController, 
    UserController, 
    TopicController,
    AuthController],
  
    providers: [
      AppService, 
      UserService, 
      TopicService,
      AuthService],
})
export class AppModule { }