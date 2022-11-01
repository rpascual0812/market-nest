import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertStatuses1666650256696 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into statuses (type, name, user_pk) values ('orders', 'Pending', 4), ('orders', 'Added to Cart', 4), ('orders', 'Ordered', 4), ('orders', 'Cancelled', 4), ('orders', 'Delivered', 4), ('orders', 'Order Received', 4);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate statuses;
        `);
    }

}
