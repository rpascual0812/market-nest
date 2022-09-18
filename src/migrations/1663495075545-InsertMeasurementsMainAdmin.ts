import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertMeasurementsMainAdmin1663495075545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into measurements (symbol, name) values ('g', 'Gram');
            insert into measurements (symbol, name) values ('kg', 'Kilogram');
            insert into measurements (symbol, name) values ('lb', 'Pound');
            insert into measurements (symbol, name) values ('pc', 'Piece');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            delete from measurements;
        `);
    }

}
