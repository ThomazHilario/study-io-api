import { Injectable } from '@nestjs/common';

// Repository
import { AuthRepository } from './auth.repository';

// Dto
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

@Injectable()
export class AuthService {
    // Constructor
    constructor(private AuthRepository:AuthRepository){}

    async verifyUserInCookieStorage(id:string){
        return this.AuthRepository.verifyUserInCookieStorage(id)
    }

    // get data user
    async getDataUser(id:string){
        return await this.AuthRepository.getDataUser(id)
    }

    // Register user
    async registerUser(data: AuthRegisterDto){
        return await this.AuthRepository.registerUser(data)
    }

    // Login user
    async loginUser(data: AuthLoginDto){
        return await this.AuthRepository.loginUser(data)
    }
}
