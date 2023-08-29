import { Injectable } from "@nestjs/common"

import { PrismaService } from "src/prisma/prisma.service"

@Injectable()
export class ClassService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.class.findMany({
      take: 10,
    })
  }

  async findOne(id: number) {
    return await this.prisma.class.findFirst({
      where: {
        id,
      },
    })
  }

  async findByDate(date: string) {
    const gte = new Date(date)
    const lte = new Date(date)

    gte.setHours(0)
    lte.setHours(0)

    lte.setDate(gte.getDate() + 1)

    return await this.prisma.class.findMany({
      where: {
        time: {
          lte: lte.toISOString(),
          gte: gte.toISOString(),
        },
      },
      orderBy: {
        time: "asc",
      },
    })
  }
}
