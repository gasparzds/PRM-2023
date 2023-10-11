import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import {Request} from "express";
import {JwtService} from '@nestjs/jwt/dist';
import { UserService } from "src/services/user.service";

@Injectable()
export class AuthGuard implements CanActivate{
   
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        
        //Verifico se o Token existe
        if (!token){
            throw new UnauthorizedException('Token inexistente')
        }

        //Verifico se o Token é valido
        let username = '';
        try {
            const payload = await this.jwtService.verifyAsync(token)
            username = payload.userName;
            console.log('Buuuu: ',payload)
        } catch {
            throw new UnauthorizedException('Token Invalido')
        }

        //TO-DO: Verificar se o usuario do payload está cadastrado
        const found = await this.userService.findByUsername(username);
        if (!found){
            throw new UnauthorizedException('Usuario nao cadastrado')
        }



        return true;
    }

    extractTokenFromHeader(request: Request): string | undefined{
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    
    }



}