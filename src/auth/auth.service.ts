import { Injectable } from '@nestjs/common';

// Repository
import { AuthRepository } from './auth.repository';

// Dto
import { AuthRegisterDto } from './dto/auth.register.dto';
import { AuthLoginDto } from './dto/auth.login.dto';

@Injectable()
export class AuthService {
    // Constructor
    constructor(private readonly AuthRepository:AuthRepository){}

    verifyToken(token:string){
        return this.AuthRepository.verifyToken(token)
    }

    // get data user
    async getData(token:string){
        return await this.AuthRepository.getData(token)
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
