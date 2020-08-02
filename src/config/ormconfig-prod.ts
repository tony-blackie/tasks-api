import { config } from 'process';

const DB_CONFIG_PROD = {
    type: 'postgres',
    host: 'ec2-34-225-162-157.compute-1.amazonaws.com',
    port: 5432,
    username: 'shntukujjivkdw',
    password:
        'a018ea7adb4ae63b2e8ebda075668e1f6baba104ea5af7936941468c3ba662ee',
    database: 'd8mv1fgbfrktuq',
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../../migrations/*{.ts,.js'],
    cli: {
        migrationsDir: 'migrations',
    },
    synchronize: true,
    ssl: true,
};

export default DB_CONFIG_PROD;
