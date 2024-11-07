import { Injectable } from '@nestjs/common';

// Repository
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
    // Constructor
    constructor(private AuthRepository:AuthRepository){}

    async verifyUserInCookieStorage(id:string){
        return this.AuthRepository.verifyUserInCookieStorage(id)
    }
}
