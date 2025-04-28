import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/todo-task.dto';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('tasks')
  async getAllTasks(@Query('completed') query: string) {
    const result = await this.taskService.getAllTasks(query);
    return result;
  }

  @Post('tasks')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    const result = await this.taskService.createTask(createTaskDto);
    return result;
  }

  @Patch('tasks/:id/complete')
  async completeTask(@Param('id') id: string, @Body() completed: boolean) {
    const result = await this.taskService.completeTask(id, completed);
    return result;
  }

  @Delete('tasks/:id/delete')
  async deleteTask(@Param('id') id: string) {
    const result = await this.taskService.deleteTask(id);
    return result;
  }
}
