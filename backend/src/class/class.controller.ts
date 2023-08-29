import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common"

import { ClassService } from "./class.service"

@Controller("classes")
export class ClassController {
  constructor(private classService: ClassService) {}

  @Get()
  find(@Query() { date }: { date: string }) {
    if (date) {
      return this.classService.findByDate(date)
    }

    return this.classService.findAll()
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number) {
    return this.classService.findOne(id)
  }
}
