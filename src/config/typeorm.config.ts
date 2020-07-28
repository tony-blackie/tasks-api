import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DB_CONFIG_LOCAL: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'asdfZxcv',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};

export const DB_CONFIG_PROD: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'ec2-54-247-118-139.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'jvoflhhwonkswq',
    password:
        'f9d19882812f41cd08cbaf3d57c1cbdb0b809eed9db2948579450848a6c9f3ad',
    database: 'd3jgvavu5ffrk1',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    ssl: true,
};
