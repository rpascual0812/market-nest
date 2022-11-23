import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertProvinces1669175125562 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(12800000, 128, 1, 'ILOCOS NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(12900000, 129, 1, 'ILOCOS SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(13300000, 133, 1, 'LA UNION', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(15500000, 155, 1, 'PANGASINAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(20900000, 209, 2, 'BATANES', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(21500000, 215, 2, 'CAGAYAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(23100000, 231, 2, 'ISABELA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(25000000, 250, 2, 'NUEVA VIZCAYA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(25700000, 257, 2, 'QUIRINO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(30800000, 308, 3, 'BATAAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(31400000, 314, 3, 'BULACAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(34900000, 349, 3, 'NUEVA ECIJA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(35400000, 354, 3, 'PAMPANGA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(36900000, 369, 3, 'TARLAC', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(37100000, 371, 3, 'ZAMBALES', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(37700000, 377, 3, 'AURORA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(41000000, 410, 4, 'BATANGAS', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(42100000, 421, 4, 'CAVITE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(43400000, 434, 4, 'LAGUNA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(45600000, 456, 4, 'QUEZON', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(45800000, 458, 4, 'RIZAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(174000000, 1740, 17, 'MARINDUQUE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(175100000, 1751, 17, 'OCCIDENTAL MINDORO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(175200000, 1752, 17, 'ORIENTAL MINDORO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(175300000, 1753, 17, 'PALAWAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(175900000, 1759, 17, 'ROMBLON', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(50500000, 505, 5, 'ALBAY', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(51600000, 516, 5, 'CAMARINES NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(51700000, 517, 5, 'CAMARINES SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(52000000, 520, 5, 'CATANDUANES', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(54100000, 541, 5, 'MASBATE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(56200000, 562, 5, 'SORSOGON', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(60400000, 604, 6, 'AKLAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(60600000, 606, 6, 'ANTIQUE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(61900000, 619, 6, 'CAPIZ', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(63000000, 630, 6, 'ILOILO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(64500000, 645, 6, 'NEGROS OCCIDENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(67900000, 679, 6, 'GUIMARAS', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(71200000, 712, 7, 'BOHOL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(72200000, 722, 7, 'CEBU', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(74600000, 746, 7, 'NEGROS ORIENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(76100000, 761, 7, 'SIQUIJOR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(82600000, 826, 8, 'EASTERN SAMAR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(83700000, 837, 8, 'LEYTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(84800000, 848, 8, 'NORTHERN SAMAR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(86000000, 860, 8, 'SAMAR (WESTERN SAMAR)', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(86400000, 864, 8, 'SOUTHERN LEYTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(87800000, 878, 8, 'BILIRAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(97200000, 972, 9, 'ZAMBOANGA DEL NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(97300000, 973, 9, 'ZAMBOANGA DEL SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(98300000, 983, 9, 'ZAMBOANGA SIBUGAY', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(99700000, 997, 9, 'CITY OF ISABELA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(101300000, 1013, 10, 'BUKIDNON', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(101800000, 1018, 10, 'CAMIGUIN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(103500000, 1035, 10, 'LANAO DEL NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(104200000, 1042, 10, 'MISAMIS OCCIDENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(104300000, 1043, 10, 'MISAMIS ORIENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(112300000, 1123, 11, 'DAVAO DEL NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(112400000, 1124, 11, 'DAVAO DEL SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(112500000, 1125, 11, 'DAVAO ORIENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(118200000, 1182, 11, 'COMPOSTELA VALLEY', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(118600000, 1186, 11, 'DAVAO OCCIDENTAL', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(
                    124700000,
                    1247,
                    12,
                    'COTABATO (NORTH COTABATO)',
                    173,
                    1
                );
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(126300000, 1263, 12, 'SOUTH COTABATO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(126500000, 1265, 12, 'SULTAN KUDARAT', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(128000000, 1280, 12, 'SARANGANI', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(129800000, 1298, 12, 'COTABATO CITY', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(
                    133900000,
                    1339,
                    13,
                    'NCR, CITY OF MANILA, FIRST DISTRICT',
                    173,
                    1
                );
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(137400000, 1374, 13, 'NCR, SECOND DISTRICT', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(137500000, 1375, 13, 'NCR, THIRD DISTRICT', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(137600000, 1376, 13, 'NCR, FOURTH DISTRICT', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(140100000, 1401, 14, 'ABRA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(141100000, 1411, 14, 'BENGUET', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(142700000, 1427, 14, 'IFUGAO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(143200000, 1432, 14, 'KALINGA', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(144400000, 1444, 14, 'MOUNTAIN PROVINCE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(148100000, 1481, 14, 'APAYAO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(150700000, 1507, 15, 'BASILAN', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(153600000, 1536, 15, 'LANAO DEL SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(153800000, 1538, 15, 'MAGUINDANAO', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(156600000, 1566, 15, 'SULU', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(157000000, 1570, 15, 'TAWI-TAWI', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(160200000, 1602, 16, 'AGUSAN DEL NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(160300000, 1603, 16, 'AGUSAN DEL SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(166700000, 1667, 16, 'SURIGAO DEL NORTE', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(166800000, 1668, 16, 'SURIGAO DEL SUR', 173, 1);
            insert into provinces(
                    psgc_code,
                    province_code,
                    region_code,
                    name,
                    country_pk,
                    user_pk
                )
            values(168500000, 1685, 16, 'DINAGAT ISLANDS', 173, 1);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate provinces;
        `);
    }

}
