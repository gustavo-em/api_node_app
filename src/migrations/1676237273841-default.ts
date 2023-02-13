import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676237273841 implements MigrationInterface {
    name = 'default1676237273841'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nome"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "name" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "nome" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "senha" text NOT NULL`);
    }

}
