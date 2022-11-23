import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCategories1669184718854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into categories (name, user_pk) values ('Vegetables', (select pk from users limit 1));
            insert into categories (name, user_pk) values ('Fruits', (select pk from users limit 1));
            insert into categories (name, user_pk) values ('Livestocks', (select pk from users limit 1));
            insert into categories (name, user_pk) values ('Native Handmade', (select pk from users limit 1));
            insert into categories (name, user_pk) values ('Root Crops', (select pk from users limit 1));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate categories restart identity;
        `);
    }

}
