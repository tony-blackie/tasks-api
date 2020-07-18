import { Injectable, NotFoundException } from '@nestjs/common';

import { TaskStatus } from './task.types';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity as Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {
        // this.taskRepository = taskRepository;
    }

    async getTaskById(id: number): Promise<Task> {
        const task = await this.taskRepository.findOne(id);

        if (!task) {
            throw new NotFoundException('Task with this id was not found');
        }

        return task;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto;

        const task = new Task(title, description, TaskStatus.OPEN);

        await task.save();

        return task;
    }

    async updateTaskStatus(id: number, status: TaskStatus) {
        const task = await this.getTaskById(id);

        task.status = status;

        await task.save();

        return task;
    }

    // getFilteredTasks(search: string, status: TaskStatus): Task[] {
    //     return this.tasks.filter(
    //         (task) =>
    //             (search &&
    //                 Object.values(task).some((val) => val.includes(search))) ||
    //             (status && task.status === status),
    //     );
    // }
    async getAllTasks(): Promise<Task[]> {
        return await this.taskRepository.find();
    }
    // getTaskById(id: string): Task {
    //     const task = this.tasks.find((task) => task.id === id);
    //     if (!task) {
    //         throw new NotFoundException('Task with this id was not found');
    //     }
    //     return task;
    // }
    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const task: Task = {
    //         ...createTaskDto,
    //         id: uuid(),
    //         status: TaskStatus.OPEN,
    //     };
    //     this.tasks.push(task);
    //     return task;
    // }
    // deleteTask(id: string): Task[] {
    //     this.getTaskById(id); //throw exception if task is not found
    //     return this.tasks.filter((task) => task.id === id);
    // }
    // updateTaskStatus(id: string, status: TaskStatus): Task[] {
    //     const taskIndex = this.tasks.findIndex((task) => task.id === id);
    //     this.tasks[taskIndex].status = status;
    //     return this.tasks;
    // }
}
