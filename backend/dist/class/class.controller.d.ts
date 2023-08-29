import { ClassService } from "./class.service";
export declare class ClassController {
    private classService;
    constructor(classService: ClassService);
    find(filters: {
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
}
