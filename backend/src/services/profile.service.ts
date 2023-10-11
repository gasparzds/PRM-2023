import { Injectable } from "@nestjs/common";

@Injectable()

export class ProfileService {

    profile() {
        return {
            fullname: 'Vitória Castanha Bresolin',
            username: '_eaecapivara',
            description: 'só sei que nada sei',
            createdAt: '2023-08-15'
        }
    }

}