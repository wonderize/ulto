import { PrismaService } from "src/prisma/prisma.service";
export declare class GroupService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        title: string;
    }[]>;
}
