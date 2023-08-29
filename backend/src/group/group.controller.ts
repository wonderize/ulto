import { Controller, Get } from "@nestjs/common"

import { GroupService } from "./group.service"

@Controller("groups")
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get()
  findAll() {
    return this.groupService.findAll()
  }
}
