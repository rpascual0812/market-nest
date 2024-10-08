import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertAccount1669178115442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into accounts (username, password, active, verified) values ('email@gmail.com', '$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK', true, true);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from accounts where username = 'rpascual0812@gmail.com';
        `);
    }

}
