// Nest Common
import { Injectable } from "@nestjs/common";

// Dto
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { AuthLoginDto } from "./dto/auth.login.dto";

// Services
import { SignInService } from "src/sign-in/sign-in.service";
import { SignupService } from "src/signup/signup.service";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthRepository{
    // Constructor
    constructor(
        private readonly prisma:PrismaService,
        private readonly signUpService: SignupService,
        private readonly signInService: SignInService,
        private readonly jwtService: JwtService
    ){}

    // Verify token
    verifyToken(token:string){
        try {
            if(this.jwtService.verify(token)){
                return true
            }
        } catch (error) {
            console.log('Error verify token', error)
            return false
        }
    }

    // get Data user
    async getData(token:string){
        try {
            // Find decoded information user for token
            const user = this.jwtService.verify(token)

            return user
        } catch (error) {
            console.log(error)
        }
    }

    // Register user
    async registerUser(data: AuthRegisterDto){
        const user = await this.signUpService.createUser(data.email, data.username, data.password)

        if(user){
            const token = this.jwtService.sign(user)

            return { token }
        }
        
    }

    // Login user
    async loginUser(data: AuthLoginDto){
        const user = await this.signInService.signIn(data.email, data.password)

        if(user){
            const token = this.jwtService.sign(user)

            return { token }
        } 
    }
}