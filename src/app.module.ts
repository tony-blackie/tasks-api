import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';

import DB_CONFIG_LOCAL from './config/ormconfig';
import DB_CONFIG_PROD from './config/ormconfig-prod';

const dbConfig =
    process.env.NODE_ENV === 'development' ? DB_CONFIG_LOCAL : DB_CONFIG_PROD;

@Module({
    imports: [TypeOrmModule.forRoot(dbConfig as any), TasksModule, AuthModule],
})
export class AppModule {}
