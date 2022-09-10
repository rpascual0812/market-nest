import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertGendersMainAdmin1643278885997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into genders (name) values ('Male');
            insert into genders (name) values ('Female');
            insert into genders (name) values ('Prefer not to say');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from genders;
        `);
    }

}
