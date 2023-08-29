import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common"

import { ClassService } from "./class.service"

@Controller("classes")
export class ClassController {
  constructor(private classService: ClassService) {}

  // FIXME: Rework @Query
  @Get()
  find(@Query() filters: { date: string; groupId: string }) {
    if (filters) {
      return this.classService.findByFilters(filters)
    }

    return this.classService.findAll()
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.classService.findOne(id)
  }
}
