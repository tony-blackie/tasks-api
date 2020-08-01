import {MigrationInterface, QueryRunner} from "typeorm";

export class TaskEntityMigration1596308521629 implements MigrationInterface {
    name = 'TaskEntityMigration1596308521629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "price" integer`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "imageUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "imageUrl"`);
        await queryRunner.query(`ALTER TABLE "task_entity" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "task_entity" ADD "description" character varying NOT NULL`);
    }

}
