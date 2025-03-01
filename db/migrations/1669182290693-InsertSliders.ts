import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertSliders1669182290693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into sliders (type, title, details, user_pk, "order") values 
            (
                'home', 
                'Welcome', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                1
            );
            insert into sliders (type, title, details, user_pk, "order") values 
            (
                'home', 
                'Two', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                2
            );
            insert into sliders (type, title, details, user_pk, "order") values 
            (
                'home', 
                'Three', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                3
            );
            insert into sliders (type, title, details, user_pk, "order") values 
            (
                'home', 
                'Four', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                4
            );

            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'big_3.png', 
                'big_3.png', 
                'assets/images/big_3.png',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'farmer.png', 
                'farmer.png', 
                'assets/images/farmer.png',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'vegetables1.jpg', 
                'vegetables1.jpg', 
                'assets/images/vegetables1.jpg',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'vegetables2.jpg', 
                'vegetables2.jpg', 
                'assets/images/vegetables2.jpg',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'fruits.jpeg', 
                'fruits.jpeg', 
                'assets/images/fruits.jpeg',
                'image/jpg',
                1234
            );

            insert into slider_documents (user_pk, slider_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from sliders where title = 'Welcome' limit 1), 
                'icon',
                (select pk from documents where filename = 'farmer.png' limit 1)
            );
            insert into slider_documents (user_pk, slider_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from sliders where title = 'Welcome' limit 1), 
                'background',
                (select pk from documents where filename = 'fruits.jpeg' limit 1)
            );
            insert into slider_documents (user_pk, slider_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from sliders where title = 'Two' limit 1), 
                'background',
                (select pk from documents where filename = 'vegetables1.jpg' limit 1)
            );
            insert into slider_documents (user_pk, slider_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from sliders where title = 'Three' limit 1), 
                'background',
                (select pk from documents where filename = 'big_3.png' limit 1)
            );
            insert into slider_documents (user_pk, slider_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from sliders where title = 'Four' limit 1), 
                'background',
                (select pk from documents where filename = 'vegetables2.jpg' limit 1)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate articles restart identity cascade;
        `);
    }

}
