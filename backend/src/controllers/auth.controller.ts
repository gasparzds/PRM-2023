import { Body, ClassSerializerInterceptor, Controller, Post, UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { HttpException } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
export class AuthController {

        constructor(
            private readonly service: AuthService,
            private readonly JwtService: JwtService,
            private readonly userService: UserService,
        ){}

        @Post(('signin'))
        @HttpCode(HttpStatus.OK)
        async signIn(@Body() credential: Record<string, string>){

            const found = await this.service.validateCredential(credential.username, credential.password)

            if (!found) {
                throw new UnauthorizedException();
            }

            const payload = {userId: found.id, userName: found.username, fullName: found.fullname}

            const token = await this.JwtService.signAsync(payload)

            return {
                accessToken: token
            }
        }

        @Post ('/signup')
        async signUp(@Body()user: User): Promise <User>{

            const found = await  this.userService.findByUsername(user.username);
            if (found){
                throw new HttpException('Nome do usuario já existente', HttpStatus.CONFLICT)
            }
            return this.userService.create(user);
        }
    }
