import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task.types';

interface Props {
    title: string;
    status: TaskStatus;
    imageUrl?: string | null;
    price?: number | null;
}

@Entity()
export class TaskEntity extends BaseEntity {
    constructor({ title, status, imageUrl = null, price = null }: Props) {
        super();

        this.title = title;
        this.price = price;
        this.status = status;
        this.imageUrl = imageUrl;
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
