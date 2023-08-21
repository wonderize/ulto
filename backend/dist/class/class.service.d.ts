import { PrismaService } from "src/prisma/prisma.service";
export declare class ClassService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        createdBy: number;
        updatedAt: Date;
        updatedBy: number;
        title: string;
        time: Date;
        location: string;
        classroom: string;
        teacher: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        createdAt: Date;
        createdBy: number;
        updatedAt: Date;
        updatedBy: number;
        title: string;
        time: Date;
        location: string;
        classroom: string;
        teacher: string;
    } | null>;
    findByDate(date: string): Promise<{
        id: number;
        createdAt: Date;
        createdBy: number;
        updatedAt: Date;
        updatedBy: number;
        title: string;
        time: Date;
        location: string;
        classroom: string;
        teacher: string;
    }[]>;
}
