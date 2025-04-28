import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/todo-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(query: string) {
    const whereClause =
      query === 'true' || query === 'false'
        ? { completed: query === 'true' }
        : {};

    const getTasks = await this.prisma.task.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' },
    });
    return getTasks;
  }

  async createTask(data: CreateTaskDto) {
    const title = data.title.trim();

    const create = await this.prisma.task.create({
      data: {
        title: title,
        completed: data.completed,
      },
    });
    return create;
  }

  async completeTask(id: string, completed: any) {
    const completedTask = await this.prisma.task.update({
      where: { id },
      data: { ...completed },
    });
    return completedTask;
  }

  async deleteTask(id: string) {
    const deletedTask = await this.prisma.task.delete({
      where: { id },
    });
    return deletedTask;
  }
}
