// Nestjs
import { Injectable } from '@nestjs/common';

// Repository
import { SignupRepository } from './signup.repository';

@Injectable()
export class SignupService {
    // Constructor
    constructor(private SignupRepository:SignupRepository){}

    // Create user
    async createUser(email:string, username:string, password:string){
        return await this.SignupRepository.createUser(email, username, password)
    }

    // Get user
    async getUser(id:string){
        return await this.SignupRepository.getUser(id)
    }
}
