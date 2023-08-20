import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export interface IAccessToken {
    access_token: string;
}
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    login({ email, password }: AuthDto): Promise<IAccessToken>;
    signToken(userId: number, email: string): Promise<IAccessToken>;
}
