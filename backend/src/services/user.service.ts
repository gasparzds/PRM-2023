import {User} from "src/entities/user.entity"
import {Injectable} from "@nestjs/common" 
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm"


@Injectable()
export class UserService{

    constructor(
        @InjectRepository(User)
        private readonly repository: Repository<User>
    ){}


    findAll(): Promise<User[]>{
        return this.repository.find();

    }



}