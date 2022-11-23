import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertUserRoles1669177089161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into roles (name, details) values ('admin', 'Administrator');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from roles;
        `);
    }

}
