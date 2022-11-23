import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertArticles1669181505600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into articles (title, description, user_pk, url) values 
            (
                'Future of Farming', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                'https://www.clariant.com/en/Business-Units/Industrial-and-Consumer-Specialties/Agrochemicals/Glufosinate-Adjuwex?utm_source=google&utm_medium=ads&utm_campaign=CropSolutions&utm_term=new%20farming&utm_content=adjuwex&utm_term=new%20farming&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=9106965265&hsa_cam=18081510944&hsa_grp=139995772733&hsa_ad=617000980485&hsa_src=g&hsa_tgt=kwd-295942304856&hsa_kw=new%20farming&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMMTcmgubNWIydETlmCgwNtb6gqD_2R2qUGMaZBkgOgMWWrLmEzQjxoCUf8QAvD_BwE'
            );
            insert into articles (title, description, user_pk, url) values 
            (
                'Losing the Farm', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                'https://beltmag.com/losing-the-farm/?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dFB7PezE3feLXxBof4V-NcSNobIg7-puKZ5q5vzjZovs6qihxplvdxoCM_4QAvD_BwE'
            );
            insert into articles (title, description, user_pk, url) values 
            (
                'Agronomy Articles', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                'https://www.agronomy.org/publications?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMAyizv6ygPlTmaDajFeP0xUnpzoQ01yZKaObFQVuD2XCOi-He3xLRoChZYQAvD_BwE'
            );
            insert into articles (title, description, user_pk, url) values 
            (
                'Successful Farming', 
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 
                (select pk from users limit 1), 
                'https://www.agronomy.org/publications?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMAyizv6ygPlTmaDajFeP0xUnpzoQ01yZKaObFQVuD2XCOi-He3xLRoChZYQAvD_BwE'
            );

            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'RY6EHiXl.jpg', 
                'RY6EHiXl.jpg', 
                'assets/images/RY6EHiXl.jpg',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                'XeWg4Ny.jpg', 
                'XeWg4Ny.jpg', 
                'assets/images/XeWg4Ny.jpg',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                '9VtNpc9.jpg', 
                '9VtNpc9.jpg', 
                'assets/images/9VtNpc9.jpg',
                'image/jpg',
                1234
            );
            insert into documents (original_name, filename, path, mime_type, size) values 
            (
                '9VtNpc9a.jpg', 
                '9VtNpc9a.jpg', 
                'assets/images/9VtNpc9a.jpg',
                'image/jpg',
                1234
            );

            insert into article_documents (user_pk, article_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from articles where title = 'Future of Farming' limit 1), 
                'background',
                (select pk from documents where filename = 'RY6EHiXl.jpg' limit 1)
            );
            insert into article_documents (user_pk, article_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from articles where title = 'Losing the Farm' limit 1), 
                'background',
                (select pk from documents where filename = 'XeWg4Ny.jpg' limit 1)
            );
            insert into article_documents (user_pk, article_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from articles where title = 'Agronomy Articles' limit 1), 
                'background',
                (select pk from documents where filename = '9VtNpc9.jpg' limit 1)
            );
            insert into article_documents (user_pk, article_pk, type, document_pk) values 
            (
                (select pk from users limit 1), 
                (select pk from articles where title = 'Successful Farming' limit 1), 
                'background',
                (select pk from documents where filename = '9VtNpc9a.jpg' limit 1)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate articles restart identity cascade;
        `);
    }

}
