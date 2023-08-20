import { ForbiddenException, Injectable } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { ConfigService } from "@nestjs/config"
import * as argon from "argon2"

import { PrismaService } from "src/prisma/prisma.service"
import { AuthDto } from "./dto"

export interface IAccessToken {
  access_token: string
}

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login({ email, password }: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new ForbiddenException("Credentials incorrect")
    }

    const isPasswordsMatch = await argon.verify(user.hash, password)

    if (!isPasswordsMatch) {
      throw new ForbiddenException("Credentials incorrect")
    }

    return this.signToken(user.id, user.email)
  }

  async signToken(userId: number, email: string): Promise<IAccessToken> {
    const secret = this.config.get("JWT_SECRET")
    const payload = {
      sub: userId,
      email,
    }
    const token = await this.jwt.signAsync(payload, {
      expiresIn: "480m",
      secret,
    })

    return {
      access_token: token,
    }
  }
}
