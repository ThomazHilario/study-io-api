// NestJS
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';

// Bcrypt
import * as bcrypt from 'bcrypt';

// Prisma service
import { PrismaService } from '../prisma.service';

@Injectable()
export class SignInRepository {
  // Constructor
  constructor(private readonly prisma: PrismaService) {}

  // SignIN user
  async signIn(email: string, password: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error('Email not found');
      }

      const passwordIsEqualForHash = await bcrypt.compare(
        password,
        user.password,
      );

      if (!passwordIsEqualForHash) {
        throw new Error('Invalid password');
      }

      return user;
    } catch (error) {
      throw new BadRequestException({
        statusCode: HttpStatus.CONFLICT,
        typeError: 'not is possible user create in database!',
        message: error.message,
      });
    }
  }
}
