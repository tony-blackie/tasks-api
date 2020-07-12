import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task.types';

@Entity()
export class TaskEntity extends BaseEntity {
    constructor(title, description, status) {
        super();

        this.title = title;
        this.description = description;
        this.status = status;
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
}
