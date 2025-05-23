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
        private prisma:PrismaService,
        private signUpService: SignupService,
        private signInService: SignInService,
        private jwtService: JwtService
    ){}

    // Verify token
    verifyToken(token:string){
        try {
            if(this.jwtService.verify(token)){
                return true
            }
        } catch (error) {
            return false
        }
    }

    // get Data user
    async getDataUser(id:string){
        try {
            // Find user
            const user = await this.prisma.user.findUnique({
                where:{id}
            })

            // Case have user
            if(user) return user
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