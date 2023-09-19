import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023',
      entities: [User]
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [AppController, ProfileController, UserController],
  providers: [AppService, ProfileService, UserService],
})
export class AppModule {}