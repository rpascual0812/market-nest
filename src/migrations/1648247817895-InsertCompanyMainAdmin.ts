import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCompanyMainAdmin1648247817895 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into companies (name, created_by) values ('Template Inc.', 1);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from accounts where name = 'Template Inc.';
        `);
    }

}
