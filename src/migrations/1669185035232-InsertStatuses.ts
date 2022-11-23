import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertStatuses1669185035232 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into statuses (type, name, user_pk) values ('orders', 'Added to Cart', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Ordered', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Cancelled', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Delivered', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Order Received', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Received', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Awaiting Confirmation', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Posted', (select pk from users limit 1));
            insert into statuses (type, name, user_pk) values ('orders', 'Fulfilled', (select pk from users limit 1));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate statuses restart identity;
        `);
    }

}
