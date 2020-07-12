import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_CONFIG } from './config/typeorm.config';

@Module({
    imports: [TypeOrmModule.forRoot(TYPE_ORM_CONFIG), TasksModule],
})
export class AppModule {}
