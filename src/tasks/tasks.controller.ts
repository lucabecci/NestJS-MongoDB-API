import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Res,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task-dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(@Res() res): void {
    this.taskService.getTasks(res);
  }

  @Get(':id')
  getTask(@Param('id') id: string, @Res() res): void {
    this.taskService.getTask(id, res);
  }

  @Post()
  postTask(@Body() task: CreateTaskDto, @Res() res): void {
    this.taskService.createTask(task, res);
  }

  @Put(':id')
  updateTask(
    @Param('id') id: string,
    @Body() task: CreateTaskDto,
    @Res() res,
  ): void {
    this.taskService.updateTask(id, task, res);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string, @Res() res): void {
    this.taskService.deleteTask(id, res);
  }
}
