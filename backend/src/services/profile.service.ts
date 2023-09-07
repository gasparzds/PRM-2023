import { Injectable } from "@nestjs/common";



@Injectable()
export class ProfileService{
    profile(){
        return {
            fullname: 'Paulo Roberto Gaspar',
            username:'paulogaspar',
            description: "Sou FODA, tudo o que faço é FODA!",
            createdAt:"2022-12-22",
        }
    }
}