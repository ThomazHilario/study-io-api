import { Injectable } from '@nestjs/common';
import { SignupRepository } from './signup.repository';

@Injectable()
export class SignupService {
    // Constructor
    constructor(private SignupRepository:SignupRepository){}

    async createUser(email:string, username:string, password:string){
        return await this.SignupRepository.createUser(email, username, password)
    }
}
