import { IsNotEmpty } from 'class-validator';

export class FilterTasksDto {
    @IsNotEmpty()
    offset: number;

    @IsNotEmpty()
    limit: number;
}
