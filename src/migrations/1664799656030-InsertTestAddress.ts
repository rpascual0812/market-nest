import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertTestAddress1664799656030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into provinces (name, country_pk, active, user_pk) values ('Test', 173, true, (select pk from users limit 1));
            insert into cities (name, country_pk, province_pk, user_pk) values ('Test', 173, (select pk from provinces limit 1), (select pk from users limit 1));
            insert into areas (name, country_pk, province_pk, city_pk, user_pk) values ('Test', 173, (select pk from provinces limit 1), (select pk from cities limit 1), (select pk from users limit 1));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate areas;
            truncate cities;
            truncate provinces;
        `);
    }

}
