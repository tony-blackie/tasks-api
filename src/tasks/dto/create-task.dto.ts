import { IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.types';

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    price?: number;

    imageUrl?: string;

    status?: TaskStatus;
}
