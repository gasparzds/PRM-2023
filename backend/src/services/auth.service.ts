
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApplicationException } from 'src/exceptions';

//@ = decorator/javascript/ts
@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ) { }

    async validateCredential(username: string, password: string): Promise<User> {
        const found: User = await this.repository.findOneBy({ username: username });
        //começa com 2 success
        //começa com 4 failed
        if (!found) {
            throw new ApplicationException('Invalid User', 401)
        }

        //To-do: implementar validação de senha

        if (found.password != password) {
            throw new ApplicationException('Invalid Password', 401)
        }


        return found;
    }

}