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
        groupId: number;
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
        groupId: number;
    } | null>;
    findByFilters({ date, groupId }: {
        date: string;
        groupId: string;
    }): Promise<{
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
        groupId: number;
    }[]>;
}
