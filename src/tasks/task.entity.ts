import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task.types';

@Entity()
export class TaskEntity extends BaseEntity {
    constructor(
        title: string,
        status: TaskStatus = TaskStatus.NOT_IN_STOCK,
        imageUrl: string | null = null,
        price: number | null = null,
    ) {
        super();

        this.title = title;
        this.status = status;
        this.imageUrl = imageUrl;
        this.price = price;
    }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    price: number | null;

    @Column({ nullable: true })
    imageUrl: string | null;

    @Column()
    status: TaskStatus;
}
