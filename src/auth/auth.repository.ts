// Nest Common
import { UnauthorizedException, HttpStatus, Injectable } from "@nestjs/common";

// Dto
import { AuthRegisterDto } from "./dto/auth.register.dto";
import { AuthLoginDto } from "./dto/auth.login.dto";

// Services
import { SignInService } from "src/sign-in/sign-in.service";
import { SignupService } from "src/signup/signup.service";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { HttpStatusMessages } from "src/utils";


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
    verifyToken(token: string): boolean {
        try {
            this.jwtService.verify(token);
            return true;
        } catch (error) {
            return false;
        }
    }

    // get Data user
    async getData(token:string){
        try {
            const tokenIsValid = this.verifyToken(token)

            if (!tokenIsValid){
                throw HttpStatusMessages[HttpStatus.UNAUTHORIZED].description
            }

            const user = this.jwtService.verify(token)

            return user
        } catch (error) {
            throw new UnauthorizedException({
                statusCode: HttpStatus.UNAUTHORIZED,
                typeError: 'Token expired!',
                message: error.message,
            });
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