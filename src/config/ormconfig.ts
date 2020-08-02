const DB_CONFIG_LOCAL = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'asdfZxcv',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../../migrations/*{.ts,.js'],
    cli: {
        migrationsDir: 'migrations',
    },
    synchronize: true,
};

export default DB_CONFIG_LOCAL;
