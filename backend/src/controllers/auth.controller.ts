import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { HttpException } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {

        constructor(
            private readonly service: AuthService,
            private readonly JwtService: JwtService
        ){}

        @Post(('signin'))
        @HttpCode(HttpStatus.OK)
        async signIn(@Body() credential: Record<string, string>){

            const found = await this.service.validateCredential(credential.username, credential.password)

            if (!found) {
                throw new UnauthorizedException();
            }

            const payload = {userId: found.id, userName: found.username}

            const token = await this.JwtService.signAsync(payload)

            return {
                accessToken: token
            }
        }
    }
