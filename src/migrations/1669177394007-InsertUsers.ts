import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertUsers1669177394007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into users (uuid, last_name, first_name, middle_name, gender_pk, birthdate, mobile_number, email_address, account_pk, country_pk, role_pk) values ('1e2e27ca-06ba-4a9f-951b-a130567eafd01', 'Pascual', 'Rafael', 'Aurelio', 1, '1986-08-12', '09162052424', 'email@gmail.com', (select pk from accounts limit 1), 173, (select pk from roles limit 1));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from users where email_address = 'email@gmail.com';
        `);
    }

}
