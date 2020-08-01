import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth/auth.module';

const DB_CONFIG_LOCAL = require('../ormconfig.json');
const DB_CONFIG_PROD = require('../ormconfig-prod.json');

const dbConfig =
    process.env.NODE_ENV === 'development' ? DB_CONFIG_LOCAL : DB_CONFIG_PROD;

@Module({
    imports: [TypeOrmModule.forRoot(dbConfig), TasksModule, AuthModule],
})
export class AppModule {}
