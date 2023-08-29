import { GroupService } from "./group.service";
export declare class GroupController {
    private groupService;
    constructor(groupService: GroupService);
    findAll(): Promise<{
        id: number;
        title: string;
    }[]>;
}
