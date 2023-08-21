import { ClassService } from "./class.service";
export declare class ClassController {
    private classService;
    constructor(classService: ClassService);
    find({ date }: {
        date: string;
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
}
