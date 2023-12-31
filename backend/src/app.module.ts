import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { AuthModule } from "./auth/auth.module"
import { UserModule } from "./user/user.module"
import { ClassModule } from "./class/class.module"
import { PrismaModule } from "./prisma/prisma.module"
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    ClassModule,
    PrismaModule,
    GroupModule,
  ],
})
export class AppModule {}
