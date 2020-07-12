import {
    Controller,
    Get,
    Post,
    Body,
    Delete,
    Param,
    Patch,
    Query,
    UsePipes,
    ValidationPipe,
    ParseIntPipe,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { TaskStatus } from './task.types';
import { CreateTaskDto } from './dto/create-task.dto';
import { FilterTasksDto } from './dto/filter-tasks.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { TaskEntity as Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    // @Get()
    // @UsePipes(ValidationPipe)
    // getTasks(@Query() filterDto: FilterTasksDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getFilteredTasks(
    //             filterDto.search,
    //             filterDto.status,
    //         );
    //     }

    //     return this.tasksService.getAllTasks();
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<typeof Task> {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.tasksService.createTask(createTaskDto);
    }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): Task[] {
    //     return this.tasksService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task[] {
    //     return this.tasksService.updateTaskStatus(id, status);
    // }
}
