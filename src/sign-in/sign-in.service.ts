import { Injectable } from '@nestjs/common';

// Repository
import { SignInRepository } from './sign-in.repository';

@Injectable()
export class SignInService {
    // Constructor
    constructor(private SignInRepository:SignInRepository){}

    // SignIn
    async signIn(email:string, password:string){
        return await this.SignInRepository.signIn(email, password)
    }
}
