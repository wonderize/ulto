import { Injectable } from "@nestjs/common"

import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.group.findMany({
      take: 10,
    })
  }
}
