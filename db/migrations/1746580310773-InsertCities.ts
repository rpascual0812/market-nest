import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCities1746580310773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ADAMS', 173, 128, 12801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACARRA', 173, 128, 12802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADOC', 173, 128, 12803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGUI', 173, 128, 12804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BATAC', 173, 128, 12805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 128, 12806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARASI', 173, 128, 12807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CURRIMAO', 173, 128, 12808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGRAS', 173, 128, 12809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALNEG', 173, 128, 12810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANNA (ESPIRITU)', 173, 128, 12811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOAG CITY (Capital)', 173, 128, 12812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARCOS', 173, 128, 12813, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUEVA ERA', 173, 128, 12814, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGUDPUD', 173, 128, 12815, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAOAY', 173, 128, 12816, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASUQUIN', 173, 128, 12817, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIDDIG', 173, 128, 12818, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINILI', 173, 128, 12819, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 128, 12820, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARRAT', 173, 128, 12821, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLSONA', 173, 128, 12822, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINTAR', 173, 128, 12823, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALILEM', 173, 129, 12901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAYOYO', 173, 129, 12902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTAY', 173, 129, 12903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 129, 12904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUGAO', 173, 129, 12905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CANDON', 173, 129, 12906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAOAYAN', 173, 129, 12907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CERVANTES', 173, 129, 12908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GALIMUYOD', 173, 129, 12909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'GREGORIO DEL PILAR (CONCEPCION)',
                    173,
                    129,
                    12910,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIDLIDDA', 173, 129, 12911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSINGAL', 173, 129, 12912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGBUKEL', 173, 129, 12913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NARVACAN', 173, 129, 12914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIRINO (ANGKAKI)', 173, 129, 12915, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALCEDO (BAUGEN)', 173, 129, 12916, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN EMILIO', 173, 129, 12917, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ESTEBAN', 173, 129, 12918, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ILDEFONSO', 173, 129, 12919, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN (LAPOG)', 173, 129, 12920, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 129, 12921, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA', 173, 129, 12922, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CATALINA', 173, 129, 12923, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 129, 12924, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA LUCIA', 173, 129, 12925, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 129, 12926, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTIAGO', 173, 129, 12927, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO', 173, 129, 12928, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIGAY', 173, 129, 12929, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINAIT', 173, 129, 12930, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUGPON', 173, 129, 12931, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUYO', 173, 129, 12932, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGUDIN', 173, 129, 12933, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VIGAN (Capital)', 173, 129, 12934, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGOO', 173, 133, 13301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARINGAY', 173, 133, 13302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACNOTAN', 173, 133, 13303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGULIN', 173, 133, 13304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAOAN', 173, 133, 13305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGAR', 173, 133, 13306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUANG', 173, 133, 13307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 133, 13308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABA', 173, 133, 13309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 133, 13310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGUILIAN', 173, 133, 13311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUGO', 173, 133, 13312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 133, 13313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN FERNANDO (Capital)', 173, 133, 13314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN GABRIEL', 173, 133, 13315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 133, 13316, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 133, 13317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTOL', 173, 133, 13318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUDIPEN', 173, 133, 13319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAO', 173, 133, 13320, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGNO', 173, 155, 15501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUILAR', 173, 155, 15502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ALAMINOS', 173, 155, 15503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCALA', 173, 155, 15504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANDA', 173, 155, 15505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASINGAN', 173, 155, 15506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALUNGAO', 173, 155, 15507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANI', 173, 155, 15508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASISTA', 173, 155, 15509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUTISTA', 173, 155, 15510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYAMBANG', 173, 155, 15511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINALONAN', 173, 155, 15512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINMALEY', 173, 155, 15513, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLINAO', 173, 155, 15514, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGALLON', 173, 155, 15515, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 155, 15516, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALASIAO', 173, 155, 15517, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGUPAN CITY', 173, 155, 15518, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DASOL', 173, 155, 15519, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INFANTA', 173, 155, 15520, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABRADOR', 173, 155, 15521, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINGAYEN (Capital)', 173, 155, 15522, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 155, 15523, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALASIQUI', 173, 155, 15524, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAOAG', 173, 155, 15525, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGALDAN', 173, 155, 15526, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGATAREM', 173, 155, 15527, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPANDAN', 173, 155, 15528, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NATIVIDAD', 173, 155, 15529, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POZORRUBIO', 173, 155, 15530, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSALES', 173, 155, 15531, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CARLOS CITY', 173, 155, 15532, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FABIAN', 173, 155, 15533, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JACINTO', 173, 155, 15534, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 155, 15535, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 155, 15536, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN QUINTIN', 173, 155, 15537, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA BARBARA', 173, 155, 15538, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 155, 15539, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 155, 15540, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SISON', 173, 155, 15541, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUAL', 173, 155, 15542, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYUG', 173, 155, 15543, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UMINGAN', 173, 155, 15544, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('URBIZTONDO', 173, 155, 15545, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF URDANETA', 173, 155, 15546, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLASIS', 173, 155, 15547, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOAC', 173, 155, 15548, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASCO (Capital)', 173, 209, 20901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ITBAYAT', 173, 209, 20902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IVANA', 173, 209, 20903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHATAO', 173, 209, 20904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABTANG', 173, 209, 20905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UYUGAN', 173, 209, 20906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABULUG', 173, 215, 21501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCALA', 173, 215, 21502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALLACAPAN', 173, 215, 21503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMULUNG', 173, 215, 21504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('APARRI', 173, 215, 21505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGGAO', 173, 215, 21506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALLESTEROS', 173, 215, 21507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGUEY', 173, 215, 21508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAYAN', 173, 215, 21509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALANIUGAN', 173, 215, 21510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 215, 21511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRILE', 173, 215, 21512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GATTARAN', 173, 215, 21513, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GONZAGA', 173, 215, 21514, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IGUIG', 173, 215, 21515, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAL-LO', 173, 215, 21516, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LASAM', 173, 215, 21517, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 215, 21518, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑABLANCA', 173, 215, 21519, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIAT', 173, 215, 21520, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 215, 21521, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANCHEZ-MIRA', 173, 215, 21522, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 215, 21523, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA PRAXEDES', 173, 215, 21524, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA TERESITA', 173, 215, 21525, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO (FAIRE)', 173, 215, 21526, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLANA', 173, 215, 21527, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUAO', 173, 215, 21528, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUGUEGARAO CITY (Capital)', 173, 215, 21529, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 231, 23101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGADANAN', 173, 231, 23102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AURORA', 173, 231, 23103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BENITO SOLIVEN', 173, 231, 23104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 231, 23105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABAGAN', 173, 231, 23106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABATUAN', 173, 231, 23107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CAUAYAN', 173, 231, 23108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORDON', 173, 231, 23109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAPIGUE', 173, 231, 23110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIVILACAN', 173, 231, 23111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ECHAGUE', 173, 231, 23112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAMU', 173, 231, 23113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILAGAN CITY (Capital)', 173, 231, 23114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JONES', 173, 231, 23115, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 231, 23116, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACONACON', 173, 231, 23117, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DELFIN ALBANO (MAGSAYSAY)', 173, 231, 23118, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALLIG', 173, 231, 23119, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGUILIAN', 173, 231, 23120, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALANAN', 173, 231, 23121, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 231, 23122, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIRINO', 173, 231, 23123, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMON', 173, 231, 23124, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REINA MERCEDES', 173, 231, 23125, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 231, 23126, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 231, 23127, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN GUILLERMO', 173, 231, 23128, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 231, 23129, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 231, 23130, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MARIANO', 173, 231, 23131, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MATEO', 173, 231, 23132, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO', 173, 231, 23133, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 231, 23134, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SANTIAGO', 173, 231, 23135, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 231, 23136, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUMAUINI', 173, 231, 23137, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMBAGUIO', 173, 250, 25001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARITAO', 173, 250, 25002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGABAG', 173, 250, 25003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAMBANG', 173, 250, 25004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYOMBONG (Capital)', 173, 250, 25005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIADI', 173, 250, 25006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUPAX DEL NORTE', 173, 250, 25007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUPAX DEL SUR', 173, 250, 25008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KASIBU', 173, 250, 25009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAYAPA', 173, 250, 25010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 250, 25011, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 250, 25012, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLANO', 173, 250, 25013, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAVERDE', 173, 250, 25014, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO CASTANEDA', 173, 250, 25015, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGLIPAY', 173, 257, 25701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABARROGUIS (Capital)', 173, 257, 25702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIFFUN', 173, 257, 25703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADDELA', 173, 257, 25704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGUDAY', 173, 257, 25705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGTIPUNAN', 173, 257, 25706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABUCAY', 173, 308, 30801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGAC', 173, 308, 30802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BALANGA (Capital)', 173, 308, 30803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINALUPIHAN', 173, 308, 30804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HERMOSA', 173, 308, 30805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIMAY', 173, 308, 30806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIVELES', 173, 308, 30807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MORONG', 173, 308, 30808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORANI', 173, 308, 30809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORION', 173, 308, 30810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 308, 30811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMAL', 173, 308, 30812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGAT', 173, 314, 31401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAGTAS (BIGAA)', 173, 314, 31402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIUAG', 173, 314, 31403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOCAUE', 173, 314, 31404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULACAN', 173, 314, 31405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUSTOS', 173, 314, 31406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUMPIT', 173, 314, 31407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIGUINTO', 173, 314, 31408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAGONOY', 173, 314, 31409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALOLOS (Capital)', 173, 314, 31410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARILAO', 173, 314, 31411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MEYCAUAYAN', 173, 314, 31412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORZAGARAY', 173, 314, 31413, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OBANDO', 173, 314, 31414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDI', 173, 314, 31415, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAOMBONG', 173, 314, 31416, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 314, 31417, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PULILAN', 173, 314, 31418, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ILDEFONSO', 173, 314, 31419, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN JOSE DEL MONTE', 173, 314, 31420, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 314, 31421, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RAFAEL', 173, 314, 31422, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 314, 31423, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOÑA REMEDIOS TRINIDAD', 173, 314, 31424, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALIAGA', 173, 349, 34901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGABON', 173, 349, 34902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANATUAN CITY', 173, 349, 34903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABIAO', 173, 349, 34904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARRANGLAN', 173, 349, 34905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUYAPO', 173, 349, 34906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GABALDON (BITULOK & SABANI)', 173, 349, 34907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF GAPAN', 173, 349, 34908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL MAMERTO NATIVIDAD', 173, 349, 34909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL TINIO (PAPAYA)', 173, 349, 34910, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIMBA', 173, 349, 34911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAEN', 173, 349, 34912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUR', 173, 349, 34913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LICAB', 173, 349, 34914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LLANERA', 173, 349, 34915, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPAO', 173, 349, 34916, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SCIENCE CITY OF MUÑOZ', 173, 349, 34917, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAMPICUAN', 173, 349, 34918, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAYAN CITY (Capital)', 173, 349, 34919, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTABANGAN', 173, 349, 34920, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑARANDA', 173, 349, 34921, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 349, 34922, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 349, 34923, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 349, 34924, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 349, 34925, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE CITY', 173, 349, 34926, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LEONARDO', 173, 349, 34927, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ROSA', 173, 349, 34928, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO', 173, 349, 34929, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAVERA', 173, 349, 34930, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALUGTUG', 173, 349, 34931, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZARAGOZA', 173, 349, 34932, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGELES CITY', 173, 354, 35401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('APALIT', 173, 354, 35402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARAYAT', 173, 354, 35403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOR', 173, 354, 35404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDABA', 173, 354, 35405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FLORIDABLANCA', 173, 354, 35406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUAGUA', 173, 354, 35407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBAO', 173, 354, 35408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABALACAT CITY', 173, 354, 35409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACABEBE', 173, 354, 35410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALANG', 173, 354, 35411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASANTOL', 173, 354, 35412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEXICO', 173, 354, 35413, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINALIN', 173, 354, 35414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORAC', 173, 354, 35415, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN FERNANDO (Capital)', 173, 354, 35416, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 354, 35417, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN SIMON', 173, 354, 35418, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 354, 35419, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA RITA', 173, 354, 35420, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 354, 35421, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SASMUAN (Sexmoan)', 173, 354, 35422, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANAO', 173, 369, 36901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAMBAN', 173, 369, 36902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMILING', 173, 369, 36903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPAS', 173, 369, 36904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 369, 36905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GERONA', 173, 369, 36906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 369, 36907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYANTOC', 173, 369, 36908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONCADA', 173, 369, 36909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANIQUI', 173, 369, 36910, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PURA', 173, 369, 36911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMOS', 173, 369, 36912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CLEMENTE', 173, 369, 36913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 369, 36914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA IGNACIA', 173, 369, 36915, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TARLAC (Capital)', 173, 369, 36916, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 369, 36917, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 369, 36918, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOTOLAN', 173, 371, 37101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANGAN', 173, 371, 37102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDELARIA', 173, 371, 37103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASTILLEJOS', 173, 371, 37104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBA (Capital)', 173, 371, 37105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASINLOC', 173, 371, 37106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLONGAPO CITY', 173, 371, 37107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAUIG', 173, 371, 37108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 371, 37109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FELIPE', 173, 371, 37110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MARCELINO', 173, 371, 37111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NARCISO', 173, 371, 37112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 371, 37113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUBIC', 173, 371, 37114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALER (Capital)', 173, 377, 37701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASIGURAN', 173, 377, 37702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DILASAG', 173, 377, 37703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINALUNGAN', 173, 377, 37704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGALAN', 173, 377, 37705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPACULAO', 173, 377, 37706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIA AURORA', 173, 377, 37707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 377, 37708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGONCILLO', 173, 410, 41001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALITAGTAG', 173, 410, 41002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAYAN', 173, 410, 41003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALETE', 173, 410, 41004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATANGAS CITY (Capital)', 173, 410, 41005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUAN', 173, 410, 41006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALACA', 173, 410, 41007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATAGAN', 173, 410, 41008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUENCA', 173, 410, 41009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBAAN', 173, 410, 41010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUREL', 173, 410, 41011, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEMERY', 173, 410, 41012, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIAN', 173, 410, 41013, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIPA CITY', 173, 410, 41014, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOBO', 173, 410, 41015, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 410, 41016, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALVAR', 173, 410, 41017, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATAASNAKAHOY', 173, 410, 41018, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NASUGBU', 173, 410, 41019, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE GARCIA', 173, 410, 41020, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 410, 41021, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 410, 41022, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 410, 41023, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 410, 41024, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 410, 41025, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PASCUAL', 173, 410, 41026, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA TERESITA', 173, 410, 41027, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 410, 41028, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAAL', 173, 410, 41029, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAY', 173, 410, 41030, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANAUAN', 173, 410, 41031, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYSAN', 173, 410, 41032, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINGLOY', 173, 410, 41033, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUY', 173, 410, 41034, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO', 173, 421, 42101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMADEO', 173, 421, 42102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOOR CITY', 173, 421, 42103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMONA', 173, 421, 42104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAVITE CITY', 173, 421, 42105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF DASMARIÑAS', 173, 421, 42106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL EMILIO AGUINALDO', 173, 421, 42107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL TRIAS', 173, 421, 42108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMUS CITY', 173, 421, 42109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INDANG', 173, 421, 42110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAWIT', 173, 421, 42111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 421, 42112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAGONDON', 173, 421, 42113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MENDEZ (MENDEZ-NUÑEZ)', 173, 421, 42114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAIC', 173, 421, 42115, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NOVELETA', 173, 421, 42116, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 421, 42117, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILANG', 173, 421, 42118, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGAYTAY CITY', 173, 421, 42119, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANZA', 173, 421, 42120, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TERNATE', 173, 421, 42121, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRECE MARTIRES CITY (Capital)', 173, 421, 42122, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GEN. MARIANO ALVAREZ', 173, 421, 42123, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALAMINOS', 173, 434, 43401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAY', 173, 434, 43402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BIÑAN', 173, 434, 43403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUYAO CITY', 173, 434, 43404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CALAMBA', 173, 434, 43405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAUAN', 173, 434, 43406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAVINTI', 173, 434, 43407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FAMY', 173, 434, 43408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAYAAN', 173, 434, 43409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILIW', 173, 434, 43410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOS BAÑOS', 173, 434, 43411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUISIANA', 173, 434, 43412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBAN', 173, 434, 43413, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABITAC', 173, 434, 43414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGDALENA', 173, 434, 43415, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAJAYJAY', 173, 434, 43416, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGCARLAN', 173, 434, 43417, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAETE', 173, 434, 43418, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGSANJAN', 173, 434, 43419, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAKIL', 173, 434, 43420, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGIL', 173, 434, 43421, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILA', 173, 434, 43422, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 434, 43423, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO CITY', 173, 434, 43424, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN PEDRO', 173, 434, 43425, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ (Capital)', 173, 434, 43426, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 434, 43427, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SANTA ROSA', 173, 434, 43428, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINILOAN', 173, 434, 43429, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 434, 43430, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGDANGAN', 173, 456, 45601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALABAT', 173, 456, 45602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ATIMONAN', 173, 456, 45603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 456, 45605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURDEOS', 173, 456, 45606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAUAG', 173, 456, 45607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDELARIA', 173, 456, 45608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATANAUAN', 173, 456, 45610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 456, 45615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL LUNA', 173, 456, 45616, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL NAKAR', 173, 456, 45617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINAYANGAN', 173, 456, 45618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUMACA', 173, 456, 45619, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INFANTA', 173, 456, 45620, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOMALIG', 173, 456, 45621, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPEZ', 173, 456, 45622, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUCBAN', 173, 456, 45623, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUCENA CITY (Capital)', 173, 456, 45624, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACALELON', 173, 456, 45625, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAUBAN', 173, 456, 45627, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MULANAY', 173, 456, 45628, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE BURGOS', 173, 456, 45629, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGBILAO', 173, 456, 45630, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANUKULAN', 173, 456, 45631, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATNANUNGAN', 173, 456, 45632, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEREZ', 173, 456, 45633, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PITOGO', 173, 456, 45634, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 456, 45635, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLILLO', 173, 456, 45636, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 456, 45637, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REAL', 173, 456, 45638, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMPALOC', 173, 456, 45639, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES', 173, 456, 45640, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 456, 45641, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO (AURORA)', 173, 456, 45642, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NARCISO', 173, 456, 45644, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARIAYA', 173, 456, 45645, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGKAWAYAN', 173, 456, 45646, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TAYABAS', 173, 456, 45647, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIAONG', 173, 456, 45648, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UNISAN', 173, 456, 45649, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGONO', 173, 458, 45801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ANTIPOLO', 173, 458, 45802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARAS', 173, 458, 45803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINANGONAN', 173, 458, 45804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAINTA', 173, 458, 45805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARDONA', 173, 458, 45806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JALA-JALA', 173, 458, 45807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RODRIGUEZ (MONTALBAN)', 173, 458, 45808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MORONG', 173, 458, 45809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILILLA', 173, 458, 45810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MATEO', 173, 458, 45811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANAY', 173, 458, 45812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYTAY', 173, 458, 45813, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TERESA', 173, 458, 45814, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOAC (Capital)', 173, 1740, 174001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 1740, 174002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GASAN', 173, 1740, 174003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOGPOG', 173, 1740, 174004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1740, 174005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TORRIJOS', 173, 1740, 174006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABRA DE ILOG', 173, 1751, 175101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALINTAAN', 173, 1751, 175102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOOC', 173, 1751, 175103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBANG', 173, 1751, 175104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1751, 175105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBURAO (Capital)', 173, 1751, 175106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALUAN', 173, 1751, 175107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 1751, 175108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABLAYAN', 173, 1751, 175109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 1751, 175110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1751, 175111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACO', 173, 1752, 175201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANSUD', 173, 1752, 175202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGABONG', 173, 1752, 175203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULALACAO (SAN PEDRO)', 173, 1752, 175204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CALAPAN (Capital)', 173, 1752, 175205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GLORIA', 173, 1752, 175206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANSALAY', 173, 1752, 175207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAUJAN', 173, 1752, 175208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINAMALAYAN', 173, 1752, 175209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLA', 173, 1752, 175210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUERTO GALERA', 173, 1752, 175211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 1752, 175212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN TEODORO', 173, 1752, 175213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOCORRO', 173, 1752, 175214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 1752, 175215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABORLAN', 173, 1753, 175301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUTAYA', 173, 1753, 175302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARACELI', 173, 1753, 175303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALABAC', 173, 1753, 175304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATARAZA', 173, 1753, 175305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BROOKE''S POINT', 173, 1753, 175306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUSUANGA', 173, 1753, 175307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGAYANCILLO', 173, 1753, 175308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORON', 173, 1753, 175309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUYO', 173, 1753, 175310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMARAN', 173, 1753, 175311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('EL NIDO (BACUIT)', 173, 1753, 175312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINAPACAN', 173, 1753, 175313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1753, 175314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NARRA', 173, 1753, 175315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PUERTO PRINCESA CITY (Capital)',
                    173,
                    1753,
                    175316,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 1753, 175317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 1753, 175318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 1753, 175319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYTAY', 173, 1753, 175320, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAYAAN', 173, 1753, 175321, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULION', 173, 1753, 175322, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL (MARCOS)', 173, 1753, 175323, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOFRONIO ESPAÑOLA', 173, 1753, 175324, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCANTARA', 173, 1759, 175901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTON', 173, 1759, 175902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAJIDIOCAN', 173, 1759, 175903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATRAVA', 173, 1759, 175904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 1759, 175905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORCUERA', 173, 1759, 175906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOOC', 173, 1759, 175907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGDIWANG', 173, 1759, 175908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ODIONGAN', 173, 1759, 175909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROMBLON (Capital)', 173, 1759, 175910, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 1759, 175911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES', 173, 1759, 175912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 1759, 175913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 1759, 175914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 1759, 175915, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FERROL', 173, 1759, 175916, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA (IMELDA)', 173, 1759, 175917, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACACAY', 173, 505, 50501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALIG', 173, 505, 50502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DARAGA (LOCSIN)', 173, 505, 50503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINOBATAN', 173, 505, 50504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOVELLAR', 173, 505, 50505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEGAZPI CITY (Capital)', 173, 505, 50506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBON', 173, 505, 50507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LIGAO', 173, 505, 50508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALILIPOT', 173, 505, 50509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALINAO', 173, 505, 50510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANITO', 173, 505, 50511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OAS', 173, 505, 50512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIO DURAN', 173, 505, 50513, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLANGUI', 173, 505, 50514, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAPU-RAPU', 173, 505, 50515, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO (LIBOG)', 173, 505, 50516, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TABACO', 173, 505, 50517, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIWI', 173, 505, 50518, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASUD', 173, 516, 51601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPALONGA', 173, 516, 51602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAET (Capital)', 173, 516, 51603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LORENZO RUIZ (IMELDA)', 173, 516, 51604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE PANGANIBAN', 173, 516, 51605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABO', 173, 516, 51606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERCEDES', 173, 516, 51607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARACALE', 173, 516, 51608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 516, 51609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ELENA', 173, 516, 51610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAY', 173, 516, 51611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINZONS', 173, 516, 51612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAAO', 173, 517, 51701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALATAN', 173, 517, 51702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 517, 51703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOMBON', 173, 517, 51704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUHI', 173, 517, 51705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULA', 173, 517, 51706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUSAO', 173, 517, 51707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALABANGA', 173, 517, 51708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALIGAN', 173, 517, 51709, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANAMAN', 173, 517, 51710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAMOAN', 173, 517, 51711, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DEL GALLEGO', 173, 517, 51712, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAINZA', 173, 517, 51713, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GARCHITORENA', 173, 517, 51714, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GOA', 173, 517, 51715, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IRIGA CITY', 173, 517, 51716, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGONOY', 173, 517, 51717, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBMANAN', 173, 517, 51718, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPI', 173, 517, 51719, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGARAO', 173, 517, 51720, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MILAOR', 173, 517, 51721, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINALABAC', 173, 517, 51722, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABUA', 173, 517, 51723, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGA CITY', 173, 517, 51724, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OCAMPO', 173, 517, 51725, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 517, 51726, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASACAO', 173, 517, 51727, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILI (Capital)', 173, 517, 51728, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESENTACION (PARUBCAN)', 173, 517, 51729, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAGAY', 173, 517, 51730, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGÑAY', 173, 517, 51731, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 517, 51732, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 517, 51733, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIPOCOT', 173, 517, 51734, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIRUMA', 173, 517, 51735, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGAON', 173, 517, 51736, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINAMBAC', 173, 517, 51737, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGAMANOC', 173, 520, 52001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARAS', 173, 520, 52002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 520, 52003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAMORAN', 173, 520, 52004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIGMOTO', 173, 520, 52005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAN', 173, 520, 52006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGANIBAN (PAYO)', 173, 520, 52007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES (CALOLBON)', 173, 520, 52008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 520, 52009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VIGA', 173, 520, 52010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VIRAC (Capital)', 173, 520, 52011, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AROROY', 173, 541, 54101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALENO', 173, 541, 54102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALUD', 173, 541, 54103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATUAN', 173, 541, 54104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATAINGAN', 173, 541, 54105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAWAYAN', 173, 541, 54106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 541, 54107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMASALANG', 173, 541, 54108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 541, 54109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANDAON', 173, 541, 54110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MASBATE (Capital)', 173, 541, 54111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MILAGROS', 173, 541, 54112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOBO', 173, 541, 54113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONREAL', 173, 541, 54114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALANAS', 173, 541, 54115, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIO V. CORPUZ (LIMBUHAN)', 173, 541, 54116, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLACER', 173, 541, 54117, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 541, 54118, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JACINTO', 173, 541, 54119, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PASCUAL', 173, 541, 54120, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('USON', 173, 541, 54121, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARCELONA', 173, 562, 56202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULAN', 173, 562, 56203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULUSAN', 173, 562, 56204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASIGURAN', 173, 562, 56205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASTILLA', 173, 562, 56206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DONSOL', 173, 562, 56207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUBAT', 173, 562, 56208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IROSIN', 173, 562, 56209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JUBAN', 173, 562, 56210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 562, 56211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATNOG', 173, 562, 56212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 562, 56213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRIETO DIAZ', 173, 562, 56214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MAGDALENA', 173, 562, 56215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SORSOGON (Capital)', 173, 562, 56216, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALTAVAS', 173, 604, 60401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALETE', 173, 604, 60402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGA', 173, 604, 60403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATAN', 173, 604, 60404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURUANGA', 173, 604, 60405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBAJAY', 173, 604, 60406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALIBO (Capital)', 173, 604, 60407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEZO', 173, 604, 60408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBACAO', 173, 604, 60409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADALAG', 173, 604, 60410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAKATO', 173, 604, 60411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALAY', 173, 604, 60412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALINAO', 173, 604, 60413, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABAS', 173, 604, 60414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW WASHINGTON', 173, 604, 60415, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUMANCIA', 173, 604, 60416, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGALAN', 173, 604, 60417, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANINI-Y', 173, 606, 60601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARBAZA', 173, 606, 60602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BELISON', 173, 606, 60603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGASONG', 173, 606, 60604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUYA', 173, 606, 60605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULASI', 173, 606, 60606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOBIAS FORNIER (DAO)', 173, 606, 60607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAMTIC', 173, 606, 60608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUA-AN', 173, 606, 60609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBERTAD', 173, 606, 60610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAN', 173, 606, 60611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATNONGON', 173, 606, 60612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE (Capital)', 173, 606, 60613, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN REMIGIO', 173, 606, 60614, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEBASTE', 173, 606, 60615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBALOM', 173, 606, 60616, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIBIAO', 173, 606, 60617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALDERRAMA', 173, 606, 60618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUARTERO', 173, 619, 61901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAO', 173, 619, 61902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALAG', 173, 619, 61903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMARAO', 173, 619, 61904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IVISAN', 173, 619, 61905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAMINDAN', 173, 619, 61906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MA-AYON', 173, 619, 61907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBUSAO', 173, 619, 61908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANAY', 173, 619, 61909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANITAN', 173, 619, 61910, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 619, 61911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PONTEVEDRA', 173, 619, 61912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT ROXAS', 173, 619, 61913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS CITY (Capital)', 173, 619, 61914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPI-AN', 173, 619, 61915, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIGMA', 173, 619, 61916, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAPAZ', 173, 619, 61917, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AJUY', 173, 630, 63001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALIMODIAN', 173, 630, 63002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANILAO', 173, 630, 63003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADIANGAN', 173, 630, 63004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALASAN', 173, 630, 63005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANATE', 173, 630, 63006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROTAC NUEVO', 173, 630, 63007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROTAC VIEJO', 173, 630, 63008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATAD', 173, 630, 63009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINGAWAN', 173, 630, 63010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABATUAN', 173, 630, 63012, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALINOG', 173, 630, 63013, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARLES', 173, 630, 63014, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 630, 63015, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGLE', 173, 630, 63016, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUEÑAS', 173, 630, 63017, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMANGAS', 173, 630, 63018, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESTANCIA', 173, 630, 63019, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIMBAL', 173, 630, 63020, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IGBARAS', 173, 630, 63021, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILOILO CITY (Capital)', 173, 630, 63022, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JANIUAY', 173, 630, 63023, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMBUNAO', 173, 630, 63025, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEGANES', 173, 630, 63026, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEMERY', 173, 630, 63027, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEON', 173, 630, 63028, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAASIN', 173, 630, 63029, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIAGAO', 173, 630, 63030, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINA', 173, 630, 63031, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW LUCENA', 173, 630, 63032, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OTON', 173, 630, 63034, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PASSI', 173, 630, 63035, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAVIA', 173, 630, 63036, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POTOTAN', 173, 630, 63037, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN DIONISIO', 173, 630, 63038, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ENRIQUE', 173, 630, 63039, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOAQUIN', 173, 630, 63040, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 630, 63041, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RAFAEL', 173, 630, 63042, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA BARBARA', 173, 630, 63043, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARA', 173, 630, 63044, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGBAUAN', 173, 630, 63045, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBUNGAN', 173, 630, 63046, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZARRAGA', 173, 630, 63047, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOD CITY (Capital)', 173, 645, 64501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGO CITY', 173, 645, 64502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINALBAGAN', 173, 645, 64503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CADIZ CITY', 173, 645, 64504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATRAVA', 173, 645, 64505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDONI', 173, 645, 64506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAUAYAN', 173, 645, 64507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRIQUE B. MAGALONA (SARAVIA)', 173, 645, 64508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ESCALANTE', 173, 645, 64509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF HIMAMAYLAN', 173, 645, 64510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINIGARAN', 173, 645, 64511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINOBA-AN (ASIA)', 173, 645, 64512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILOG', 173, 645, 64513, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISABELA', 173, 645, 64514, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KABANKALAN', 173, 645, 64515, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA CARLOTA CITY', 173, 645, 64516, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA CASTELLANA', 173, 645, 64517, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAPLA', 173, 645, 64518, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOISES PADILLA (MAGALLON)', 173, 645, 64519, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MURCIA', 173, 645, 64520, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PONTEVEDRA', 173, 645, 64521, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PULUPANDAN', 173, 645, 64522, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGAY CITY', 173, 645, 64523, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CARLOS CITY', 173, 645, 64524, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ENRIQUE', 173, 645, 64525, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILAY CITY', 173, 645, 64526, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SIPALAY', 173, 645, 64527, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TALISAY', 173, 645, 64528, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOBOSO', 173, 645, 64529, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALLADOLID', 173, 645, 64530, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VICTORIAS', 173, 645, 64531, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALVADOR BENEDICTO', 173, 645, 64532, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 679, 67901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JORDAN (Capital)', 173, 679, 67902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUEVA VALENCIA', 173, 679, 67903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LORENZO', 173, 679, 67904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUNAG', 173, 679, 67905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALBURQUERQUE', 173, 712, 71201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 712, 71202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANDA', 173, 712, 71203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANTEQUERA', 173, 712, 71204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACLAYON', 173, 712, 71205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALILIHAN', 173, 712, 71206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATUAN', 173, 712, 71207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BILAR', 173, 712, 71208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 712, 71209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAPE', 173, 712, 71210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDIJAY', 173, 712, 71211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 712, 71212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATIGBIAN', 173, 712, 71213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLARIN', 173, 712, 71214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORELLA', 173, 712, 71215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORTES', 173, 712, 71216, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGOHOY', 173, 712, 71217, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANAO', 173, 712, 71218, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAUIS', 173, 712, 71219, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMIAO', 173, 712, 71220, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUERO', 173, 712, 71221, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GARCIA HERNANDEZ', 173, 712, 71222, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINDULMAN', 173, 712, 71223, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INABANGA', 173, 712, 71224, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAGNA', 173, 712, 71225, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JETAFE', 173, 712, 71226, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILA', 173, 712, 71227, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOAY', 173, 712, 71228, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOBOC', 173, 712, 71229, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOON', 173, 712, 71230, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 712, 71231, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIBOJOC', 173, 712, 71232, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGLAO', 173, 712, 71233, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 712, 71234, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PRES. CARLOS P. GARCIA (PITOGO)',
                    173,
                    712,
                    71235,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGBAYAN (BORJA)', 173, 712, 71236, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 712, 71237, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 712, 71238, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEVILLA', 173, 712, 71239, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIERRA BULLONES', 173, 712, 71240, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIKATUNA', 173, 712, 71241, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGBILARAN CITY (Capital)', 173, 712, 71242, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALIBON', 173, 712, 71243, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRINIDAD', 173, 712, 71244, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBIGON', 173, 712, 71245, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UBAY', 173, 712, 71246, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALENCIA', 173, 712, 71247, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BIEN UNIDO', 173, 712, 71248, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCANTARA', 173, 722, 72201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCOY', 173, 722, 72202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEGRIA', 173, 722, 72203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALOGUINSAN', 173, 722, 72204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARGAO', 173, 722, 72205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASTURIAS', 173, 722, 72206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADIAN', 173, 722, 72207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAMBAN', 173, 722, 72208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTAYAN', 173, 722, 72209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARILI', 173, 722, 72210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BOGO', 173, 722, 72211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLJOON', 173, 722, 72212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BORBON', 173, 722, 72213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CARCAR', 173, 722, 72214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 722, 72215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATMON', 173, 722, 72216, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CEBU CITY (Capital)', 173, 722, 72217, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COMPOSTELA', 173, 722, 72218, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONSOLACION', 173, 722, 72219, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORDOVA', 173, 722, 72220, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAANBANTAYAN', 173, 722, 72221, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DALAGUETE', 173, 722, 72222, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANAO CITY', 173, 722, 72223, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMANJUG', 173, 722, 72224, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GINATILAN', 173, 722, 72225, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPU-LAPU CITY (OPON)', 173, 722, 72226, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOAN', 173, 722, 72227, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADRIDEJOS', 173, 722, 72228, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALABUYOC', 173, 722, 72229, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANDAUE CITY', 173, 722, 72230, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEDELLIN', 173, 722, 72231, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINGLANILLA', 173, 722, 72232, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOALBOAL', 173, 722, 72233, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF NAGA', 173, 722, 72234, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OSLOB', 173, 722, 72235, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 722, 72236, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINAMUNGAHAN', 173, 722, 72237, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORO', 173, 722, 72238, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RONDA', 173, 722, 72239, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMBOAN', 173, 722, 72240, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 722, 72241, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 722, 72242, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN REMIGIO', 173, 722, 72243, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 722, 72244, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTANDER', 173, 722, 72245, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBONGA', 173, 722, 72246, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOGOD', 173, 722, 72247, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABOGON', 173, 722, 72248, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABUELAN', 173, 722, 72249, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TALISAY', 173, 722, 72250, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOLEDO CITY', 173, 722, 72251, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBURAN', 173, 722, 72252, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUDELA', 173, 722, 72253, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMLAN (AYUQUITAN)', 173, 746, 74601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AYUNGON', 173, 746, 74602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACONG', 173, 746, 74603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAIS CITY', 173, 746, 74604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASAY', 173, 746, 74605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYAWAN (TULONG)', 173, 746, 74606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINDOY (PAYABON)', 173, 746, 74607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANLAON CITY', 173, 746, 74608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAUIN', 173, 746, 74609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMAGUETE CITY (Capital)', 173, 746, 74610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF GUIHULNGAN', 173, 746, 74611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIMALALUD', 173, 746, 74612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA LIBERTAD', 173, 746, 74613, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINAY', 173, 746, 74614, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANJUYOD', 173, 746, 74615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 746, 74616, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 746, 74617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CATALINA', 173, 746, 74618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIATON', 173, 746, 74619, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBULAN', 173, 746, 74620, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANJAY', 173, 746, 74621, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYASAN', 173, 746, 74622, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALENCIA (LUZURRIAGA)', 173, 746, 74623, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALLEHERMOSO', 173, 746, 74624, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZAMBOANGUITA', 173, 746, 74625, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRIQUE VILLANUEVA', 173, 761, 76101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LARENA', 173, 761, 76102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAZI', 173, 761, 76103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIA', 173, 761, 76104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 761, 76105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIQUIJOR (Capital)', 173, 761, 76106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARTECHE', 173, 826, 82601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALANGIGA', 173, 826, 82602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALANGKAYAN', 173, 826, 82603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BORONGAN (Capital)', 173, 826, 82604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAN-AVID', 173, 826, 82605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 826, 82606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL MACARTHUR', 173, 826, 82607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIPORLOS', 173, 826, 82608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIUAN', 173, 826, 82609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HERNANI', 173, 826, 82610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIPAPAD', 173, 826, 82611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAWAAN', 173, 826, 82612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LLORENTE', 173, 826, 82613, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASLOG', 173, 826, 82614, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYDOLONG', 173, 826, 82615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERCEDES', 173, 826, 82616, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORAS', 173, 826, 82617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUINAPONDAN', 173, 826, 82618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALCEDO', 173, 826, 82619, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JULIAN', 173, 826, 82620, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN POLICARPO', 173, 826, 82621, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULAT', 173, 826, 82622, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAFT', 173, 826, 82623, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABUYOG', 173, 837, 83701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALANGALANG', 173, 837, 83702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALBUERA', 173, 837, 83703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BABATNGON', 173, 837, 83705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARUGO', 173, 837, 83706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 837, 83707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYBAY', 173, 837, 83708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURAUEN', 173, 837, 83710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUBIAN', 173, 837, 83713, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPOOCAN', 173, 837, 83714, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARIGARA', 173, 837, 83715, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGAMI', 173, 837, 83717, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DULAG', 173, 837, 83718, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HILONGOS', 173, 837, 83719, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINDANG', 173, 837, 83720, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INOPACAN', 173, 837, 83721, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISABEL', 173, 837, 83722, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JARO', 173, 837, 83723, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAVIER (BUGHO)', 173, 837, 83724, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JULITA', 173, 837, 83725, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KANANGA', 173, 837, 83726, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 837, 83728, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEYTE', 173, 837, 83729, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACARTHUR', 173, 837, 83730, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHAPLAG', 173, 837, 83731, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATAG-OB', 173, 837, 83733, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATALOM', 173, 837, 83734, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYORGA', 173, 837, 83735, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERIDA', 173, 837, 83736, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORMOC CITY', 173, 837, 83738, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALO', 173, 837, 83739, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALOMPON', 173, 837, 83740, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASTRANA', 173, 837, 83741, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 837, 83742, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 837, 83743, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 837, 83744, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABANGO', 173, 837, 83745, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABONTABON', 173, 837, 83746, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TACLOBAN CITY (Capital)', 173, 837, 83747, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANAUAN', 173, 837, 83748, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOLOSA', 173, 837, 83749, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUNGA', 173, 837, 83750, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLABA', 173, 837, 83751, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALLEN', 173, 848, 84801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BIRI', 173, 848, 84802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOBON', 173, 848, 84803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPUL', 173, 848, 84804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATARMAN (Capital)', 173, 848, 84805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATUBIG', 173, 848, 84806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAMAY', 173, 848, 84807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOANG', 173, 848, 84808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPINIG', 173, 848, 84809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAS NAVAS', 173, 848, 84810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAVEZARES', 173, 848, 84811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPANAS', 173, 848, 84812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONDRAGON', 173, 848, 84813, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAPAG', 173, 848, 84814, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMBUJAN', 173, 848, 84815, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 848, 84816, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 848, 84817, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 848, 84818, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 848, 84819, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ROQUE', 173, 848, 84820, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 848, 84821, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILVINO LOBOS', 173, 848, 84822, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 848, 84823, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPE DE VEGA', 173, 848, 84824, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALMAGRO', 173, 860, 86001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASEY', 173, 860, 86002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALBAYOG CITY', 173, 860, 86003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALBIGA', 173, 860, 86004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CATBALOGAN (Capital)', 173, 860, 86005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DARAM', 173, 860, 86006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GANDARA', 173, 860, 86007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINABANGAN', 173, 860, 86008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIABONG', 173, 860, 86009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARABUT', 173, 860, 86010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATUGUINAO', 173, 860, 86011, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOTIONG', 173, 860, 86012, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINABACDAO', 173, 860, 86013, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE DE BUAN', 173, 860, 86014, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN SEBASTIAN', 173, 860, 86015, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARGARITA', 173, 860, 86016, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA RITA', 173, 860, 86017, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO', 173, 860, 86018, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALALORA', 173, 860, 86019, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARANGNAN', 173, 860, 86020, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAREAL', 173, 860, 86021, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANAS (WRIGHT)', 173, 860, 86022, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZUMARRAGA', 173, 860, 86023, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGAPUL-AN', 173, 860, 86024, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JORGE', 173, 860, 86025, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGSANGHAN', 173, 860, 86026, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANAHAWAN', 173, 864, 86401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONTOC', 173, 864, 86402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINUNANGAN', 173, 864, 86403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINUNDAYAN', 173, 864, 86404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBAGON', 173, 864, 86405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOAN', 173, 864, 86406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MAASIN (Capital)', 173, 864, 86407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACROHON', 173, 864, 86408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITBOG', 173, 864, 86409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE BURGOS', 173, 864, 86410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINTUYAN', 173, 864, 86411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAINT BERNARD', 173, 864, 86412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 864, 86413, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN (CABALIAN)', 173, 864, 86414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RICARDO', 173, 864, 86415, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILAGO', 173, 864, 86416, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOGOD', 173, 864, 86417, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOMAS OPPUS', 173, 864, 86418, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIMASAWA', 173, 864, 86419, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALMERIA', 173, 878, 87801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BILIRAN', 173, 878, 87802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUCGAYAN', 173, 878, 87803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAIBIRAN', 173, 878, 87804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULABA', 173, 878, 87805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAWAYAN', 173, 878, 87806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIPIPI', 173, 878, 87807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAVAL (Capital)', 173, 878, 87808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAPITAN CITY', 173, 972, 97201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPOLOG CITY (Capital)', 173, 972, 97202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KATIPUNAN', 173, 972, 97203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA LIBERTAD', 173, 972, 97204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABASON', 173, 972, 97205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOY', 173, 972, 97206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANUKAN', 173, 972, 97207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MUTIA', 173, 972, 97208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIÑAN (NEW PIÑAN)', 173, 972, 97209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLANCO', 173, 972, 97210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRES. MANUEL A. ROXAS', 173, 972, 97211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 972, 97212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALUG', 173, 972, 97213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SERGIO OSMEÑA SR.', 173, 972, 97214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIAYAN', 173, 972, 97215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUCO', 173, 972, 97216, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUTAD', 173, 972, 97217, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINDANGAN', 173, 972, 97218, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIOCON', 173, 972, 97219, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIRAWAI', 173, 972, 97220, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPILISAN', 173, 972, 97221, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE DALMAN (PONOT)', 173, 972, 97222, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUTALAC', 173, 972, 97223, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIGUIAN', 173, 972, 97224, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GODOD', 173, 972, 97225, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACUNGAN (Leon T. Postigo)', 173, 972, 97226, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAWIT', 173, 972, 97227, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AURORA', 173, 973, 97302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYOG', 173, 973, 97303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMATALING', 173, 973, 97305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAS', 173, 973, 97306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALINAO', 173, 973, 97307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMINGAG', 173, 973, 97308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KUMALARANG', 173, 973, 97311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABANGAN', 173, 973, 97312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPUYAN', 173, 973, 97313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHAYAG', 173, 973, 97315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARGOSATUBIG', 173, 973, 97317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIDSALIP', 173, 973, 97318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOLAVE', 173, 973, 97319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGADIAN CITY (Capital)', 173, 973, 97322, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMON MAGSAYSAY (LIARGO)', 173, 973, 97323, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 973, 97324, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO', 173, 973, 97325, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABINA', 173, 973, 97327, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMBULIG', 173, 973, 97328, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUKURAN', 173, 973, 97330, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZAMBOANGA CITY', 173, 973, 97332, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAKEWOOD', 173, 973, 97333, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSEFINA', 173, 973, 97337, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PITOGO', 173, 973, 97338, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOMINOT (DON MARIANO MARCOS)', 173, 973, 97340, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINCENZO A. SAGUN', 173, 973, 97341, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIPOS', 173, 973, 97343, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGBAO', 173, 973, 97344, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 983, 98301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUUG', 173, 983, 98302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPLAHAN', 173, 983, 98303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMELDA', 173, 983, 98304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IPIL (Capital)', 173, 983, 98305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABASALAN', 173, 983, 98306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABUHAY', 173, 983, 98307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALANGAS', 173, 983, 98308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGA', 173, 983, 98309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLUTANGA', 173, 983, 98310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAYAO', 173, 983, 98311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSELLER LIM', 173, 983, 98312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIAY', 173, 983, 98313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALUSAN', 173, 983, 98314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TITAY', 173, 983, 98315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUNGAWAN', 173, 983, 98316, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ISABELA', 173, 997, 99701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUNGON', 173, 1013, 101301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAMULOG', 173, 1013, 101302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANGCAGAN', 173, 1013, 101303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DON CARLOS', 173, 1013, 101304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMPASUG-ONG', 173, 1013, 101305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KADINGILAN', 173, 1013, 101306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALILANGAN', 173, 1013, 101307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBAWE', 173, 1013, 101308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KITAOTAO', 173, 1013, 101309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANTAPAN', 173, 1013, 101310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBONA', 173, 1013, 101311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALAYBALAY (Capital)', 173, 1013, 101312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITBOG', 173, 1013, 101313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANOLO FORTICH', 173, 1013, 101314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAMAG', 173, 1013, 101315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGANTUCAN', 173, 1013, 101316, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 1013, 101317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 1013, 101318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUMILAO', 173, 1013, 101319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAKAG', 173, 1013, 101320, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VALENCIA', 173, 1013, 101321, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANGLASAN', 173, 1013, 101322, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATARMAN', 173, 1018, 101801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINSILIBAN', 173, 1018, 101802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHINOG', 173, 1018, 101803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBAJAO (Capital)', 173, 1018, 101804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGAY', 173, 1018, 101805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOD', 173, 1035, 103501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALOI', 173, 1035, 103502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROY', 173, 1035, 103503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILIGAN CITY', 173, 1035, 103504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPATAGAN', 173, 1035, 103505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SULTAN NAGA DIMAPORO (KAROMATAN)',
                    173,
                    1035,
                    103506,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAUSWAGAN', 173, 1035, 103507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KOLAMBUGAN', 173, 1035, 103508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LALA', 173, 1035, 103509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINAMON', 173, 1035, 103510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1035, 103511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAIGO', 173, 1035, 103512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATUNGAO', 173, 1035, 103513, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MUNAI', 173, 1035, 103514, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUNUNGAN', 173, 1035, 103515, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTAO RAGAT', 173, 1035, 103516, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POONA PIAGAPO', 173, 1035, 103517, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALVADOR', 173, 1035, 103518, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPAD', 173, 1035, 103519, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN', 173, 1035, 103520, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGCAL', 173, 1035, 103521, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBOD (Capital)', 173, 1035, 103522, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTAR', 173, 1035, 103523, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALORAN', 173, 1042, 104201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIANGAO', 173, 1042, 104202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONIFACIO', 173, 1042, 104203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAMBA', 173, 1042, 104204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLARIN', 173, 1042, 104205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 1042, 104206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIMENEZ', 173, 1042, 104207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPEZ JAENA', 173, 1042, 104208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OROQUIETA CITY (Capital)', 173, 1042, 104209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OZAMIS CITY', 173, 1042, 104210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANAON', 173, 1042, 104211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 1042, 104212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPANG DALAGA', 173, 1042, 104213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINACABAN', 173, 1042, 104214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGUB CITY', 173, 1042, 104215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUDELA', 173, 1042, 104216, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'DON VICTORIANO CHIONGBIAN  (DON MARIANO MARCOS)',
                    173,
                    1042,
                    104217,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALUBIJID', 173, 1043, 104301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINGASAG', 173, 1043, 104302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINGOAN', 173, 1043, 104303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINUANGAN', 173, 1043, 104304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'CAGAYAN DE ORO CITY (Capital)',
                    173,
                    1043,
                    104305,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 1043, 104306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF EL SALVADOR', 173, 1043, 104307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GINGOOG CITY', 173, 1043, 104308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GITAGUM', 173, 1043, 104309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INITAO', 173, 1043, 104310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JASAAN', 173, 1043, 104311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KINOGUITAN', 173, 1043, 104312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGONGLONG', 173, 1043, 104313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGUINDINGAN', 173, 1043, 104314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBERTAD', 173, 1043, 104315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUGAIT', 173, 1043, 104316, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY (LINUGOS)', 173, 1043, 104317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANTICAO', 173, 1043, 104318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEDINA', 173, 1043, 104319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAAWAN', 173, 1043, 104320, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OPOL', 173, 1043, 104321, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALAY', 173, 1043, 104322, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUGBONGCOGON', 173, 1043, 104323, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN', 173, 1043, 104324, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAYAN', 173, 1043, 104325, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLANUEVA', 173, 1043, 104326, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASUNCION (SAUG)', 173, 1123, 112301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1123, 112303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPALONG', 173, 1123, 112305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW CORELLA', 173, 1123, 112314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PANABO', 173, 1123, 112315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISLAND GARDEN CITY OF SAMAL', 173, 1123, 112317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 1123, 112318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TAGUM (Capital)', 173, 1123, 112319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAINGOD', 173, 1123, 112322, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BRAULIO E. DUJALI', 173, 1123, 112323, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1123, 112324, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANSALAN', 173, 1124, 112401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAVAO CITY', 173, 1124, 112402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF DIGOS (Capital)', 173, 1124, 112403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAGONOY', 173, 1124, 112404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBLAWAN', 173, 1124, 112406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1124, 112407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALALAG', 173, 1124, 112408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATANAO', 173, 1124, 112410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADADA', 173, 1124, 112411, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1124, 112412, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULOP', 173, 1124, 112414, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGANGA', 173, 1125, 112501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAYBANAY', 173, 1125, 112502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOSTON', 173, 1125, 112503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAGA', 173, 1125, 112504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATEEL', 173, 1125, 112505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GOVERNOR GENEROSO', 173, 1125, 112506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPON', 173, 1125, 112507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAY', 173, 1125, 112508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MATI (Capital)', 173, 1125, 112509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1125, 112510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARRAGONA', 173, 1125, 112511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COMPOSTELA', 173, 1182, 118201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAAK (SAN VICENTE)', 173, 1182, 118202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI (DOÑA ALICIA)', 173, 1182, 118203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACO', 173, 1182, 118204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAGUSAN (SAN MARIANO)', 173, 1182, 118205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAWAB', 173, 1182, 118206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONKAYO', 173, 1182, 118207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONTEVISTA', 173, 1182, 118208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABUNTURAN (Capital)', 173, 1182, 118209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW BATAAN', 173, 1182, 118210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTUKAN', 173, 1182, 118211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DON MARCELINO', 173, 1186, 118601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE ABAD SANTOS (TRINIDAD)', 173, 1186, 118602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITA', 173, 1186, 118603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 1186, 118604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARANGANI', 173, 1186, 118605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALAMADA', 173, 1247, 124701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1247, 124702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABACAN', 173, 1247, 124703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KIDAPAWAN (Capital)', 173, 1247, 124704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBUNGAN', 173, 1247, 124705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGPET', 173, 1247, 124706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAKILALA', 173, 1247, 124707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATALAM', 173, 1247, 124708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIDSAYAP', 173, 1247, 124709, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('M''LANG', 173, 1247, 124710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIGKAWAYAN', 173, 1247, 124711, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIKIT', 173, 1247, 124712, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT ROXAS', 173, 1247, 124713, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TULUNAN', 173, 1247, 124714, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANTIPAS', 173, 1247, 124715, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANISILAN', 173, 1247, 124716, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEOSAN', 173, 1247, 124717, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARAKAN', 173, 1247, 124718, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGA', 173, 1263, 126302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'GENERAL SANTOS CITY (DADIANGAS)',
                    173,
                    1263,
                    126303,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KORONADAL (Capital)', 173, 1263, 126306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORALA', 173, 1263, 126311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLOMOLOK', 173, 1263, 126312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SURALLAH', 173, 1263, 126313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPAKAN', 173, 1263, 126314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANTANGAN', 173, 1263, 126315, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('T''BOLI', 173, 1263, 126316, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUPI', 173, 1263, 126317, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO', 173, 1263, 126318, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAKE SEBU', 173, 1263, 126319, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGUMBAYAN', 173, 1265, 126501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COLUMBIO', 173, 1265, 126502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 1265, 126503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISULAN (Capital)', 173, 1265, 126504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAMANSIG', 173, 1265, 126505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEBAK', 173, 1265, 126506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUTAYAN', 173, 1265, 126507, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMBAYONG (MARIANO MARCOS)', 173, 1265, 126508, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALIMBANG', 173, 1265, 126509, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT QUIRINO', 173, 1265, 126510, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TACURONG', 173, 1265, 126511, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEN. NINOY AQUINO', 173, 1265, 126512, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALABEL (Capital)', 173, 1280, 128001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GLAN', 173, 1280, 128002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIAMBA', 173, 1280, 128003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAASIM', 173, 1280, 128004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAITUM', 173, 1280, 128005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALAPATAN', 173, 1280, 128006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALUNGON', 173, 1280, 128007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COTABATO CITY', 173, 1298, 129804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TONDO I / II', 173, 1339, 133901, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINONDO', 173, 1339, 133902, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIAPO', 173, 1339, 133903, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 1339, 133904, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1339, 133905, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMPALOC', 173, 1339, 133906, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 1339, 133907, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ERMITA', 173, 1339, 133908, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INTRAMUROS', 173, 1339, 133909, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALATE', 173, 1339, 133910, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PACO', 173, 1339, 133911, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDACAN', 173, 1339, 133912, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORT AREA', 173, 1339, 133913, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 1339, 133914, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MANDALUYONG', 173, 1374, 137401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MARIKINA', 173, 1374, 137402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PASIG', 173, 1374, 137403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON CITY', 173, 1374, 137404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN JUAN', 173, 1374, 137405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALOOCAN CITY', 173, 1375, 137501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALABON', 173, 1375, 137502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF NAVOTAS', 173, 1375, 137503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VALENZUELA', 173, 1375, 137504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LAS PIÑAS', 173, 1376, 137601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MAKATI', 173, 1376, 137602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MUNTINLUPA', 173, 1376, 137603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PARAÑAQUE', 173, 1376, 137604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASAY CITY', 173, 1376, 137605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATEROS', 173, 1376, 137606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGUIG CITY', 173, 1376, 137607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGUED (Capital)', 173, 1401, 140101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLINEY', 173, 1401, 140102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUCAY', 173, 1401, 140103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUCLOC', 173, 1401, 140104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGUIOMAN', 173, 1401, 140105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANGLAS', 173, 1401, 140106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 1401, 140107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 1401, 140108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LACUB', 173, 1401, 140109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGANGILANG', 173, 1401, 140110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGAYAN', 173, 1401, 140111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANGIDEN', 173, 1401, 140112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LICUAN-BAAY (LICUAN)', 173, 1401, 140113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBA', 173, 1401, 140114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALIBCONG', 173, 1401, 140115, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANABO', 173, 1401, 140116, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑARRUBIA', 173, 1401, 140117, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIDIGAN', 173, 1401, 140118, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 1401, 140119, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALLAPADAN', 173, 1401, 140120, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1401, 140121, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 1401, 140122, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN QUINTIN', 173, 1401, 140123, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYUM', 173, 1401, 140124, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINEG', 173, 1401, 140125, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBO', 173, 1401, 140126, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAVICIOSA', 173, 1401, 140127, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ATOK', 173, 1411, 141101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGUIO CITY', 173, 1411, 141102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAKUN', 173, 1411, 141103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOKOD', 173, 1411, 141104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGUIAS', 173, 1411, 141105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ITOGON', 173, 1411, 141106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABAYAN', 173, 1411, 141107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPANGAN', 173, 1411, 141108, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBUNGAN', 173, 1411, 141109, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA TRINIDAD (Capital)', 173, 1411, 141110, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANKAYAN', 173, 1411, 141111, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABLAN', 173, 1411, 141112, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBA', 173, 1411, 141113, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBLAY', 173, 1411, 141114, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAUE', 173, 1427, 142701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HUNGDUAN', 173, 1427, 142702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIANGAN', 173, 1427, 142703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGAWE (Capital)', 173, 1427, 142704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMUT', 173, 1427, 142705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYOYAO', 173, 1427, 142706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO LISTA (POTIA)', 173, 1427, 142707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUINALDO', 173, 1427, 142708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINGYON', 173, 1427, 142709, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINOC', 173, 1427, 142710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASIPULO', 173, 1427, 142711, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALBALAN', 173, 1432, 143201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBUAGAN', 173, 1432, 143206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASIL', 173, 1432, 143208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINUKPUK', 173, 1432, 143209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL (LIWAN)', 173, 1432, 143211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TABUK (Capital)', 173, 1432, 143213, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANUDAN', 173, 1432, 143214, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINGLAYAN', 173, 1432, 143215, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARLIG', 173, 1444, 144401, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUKO', 173, 1444, 144402, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BESAO', 173, 1444, 144403, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONTOC (Capital)', 173, 1444, 144404, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NATONIN', 173, 1444, 144405, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARACELIS', 173, 1444, 144406, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABANGAN', 173, 1444, 144407, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SADANGA', 173, 1444, 144408, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGADA', 173, 1444, 144409, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TADIAN', 173, 1444, 144410, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALANASAN (BAYAG)', 173, 1481, 148101, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONNER', 173, 1481, 148102, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FLORA', 173, 1481, 148103, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABUGAO (Capital)', 173, 1481, 148104, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 1481, 148105, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUDTOL', 173, 1481, 148106, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARCELA', 173, 1481, 148107, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LAMITAN', 173, 1507, 150702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANTAWAN', 173, 1507, 150703, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALUSO', 173, 1507, 150704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUMISIP', 173, 1507, 150705, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIPO-TIPO', 173, 1507, 150706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBURAN', 173, 1507, 150707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AKBAR', 173, 1507, 150708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AL-BARKA', 173, 1507, 150709, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HADJI MOHAMMAD AJUL', 173, 1507, 150710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UNGKAYA PUKAN', 173, 1507, 150711, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HADJI MUHTAMAD', 173, 1507, 150712, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABUAN-LASA', 173, 1507, 150713, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'BACOLOD-KALAWI (BACOLOD GRANDE)',
                    173,
                    1536,
                    153601,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALABAGAN', 173, 1536, 153602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINDONG (WATU)', 173, 1536, 153603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYANG', 173, 1536, 153604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINIDAYAN', 173, 1536, 153605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUBONG', 173, 1536, 153606, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUTIG', 173, 1536, 153607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GANASSI', 173, 1536, 153609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPAI', 173, 1536, 153610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBA-BAYABAO (MAGUING)', 173, 1536, 153611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBATAN', 173, 1536, 153612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADALUM', 173, 1536, 153613, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADAMBA', 173, 1536, 153614, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALABANG', 173, 1536, 153615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARANTAO', 173, 1536, 153616, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAWI CITY (Capital)', 173, 1536, 153617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASIU', 173, 1536, 153618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MULONDO', 173, 1536, 153619, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGAYAWAN (TATARIKAN)', 173, 1536, 153620, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIAGAPO', 173, 1536, 153621, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POONA BAYABAO (GATA)', 173, 1536, 153622, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUALAS', 173, 1536, 153623, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DITSAAN-RAMAIN', 173, 1536, 153624, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGUIARAN', 173, 1536, 153625, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPARAN', 173, 1536, 153626, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARAKA', 173, 1536, 153627, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBARAN', 173, 1536, 153628, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUGAYA', 173, 1536, 153629, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('WAO', 173, 1536, 153630, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAROGONG', 173, 1536, 153631, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALANOGAS', 173, 1536, 153632, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUADIPOSO-BUNTONG', 173, 1536, 153633, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGUING', 173, 1536, 153634, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PICONG (SULTAN GUMANDER)', 173, 1536, 153635, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBAYANAGUE', 173, 1536, 153636, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUMBARAN', 173, 1536, 153637, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN II', 173, 1536, 153638, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPATAGAN', 173, 1536, 153639, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN DUMALONDONG', 173, 1536, 153640, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBACA-UNAYAN', 173, 1536, 153641, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMPATUAN', 173, 1538, 153801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULDON', 173, 1538, 153802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULUAN', 173, 1538, 153803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU PAGLAS', 173, 1538, 153805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU PIANG', 173, 1538, 153806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ODIN SINSUAT (DINAIG)', 173, 1538, 153807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SHARIFF AGUAK (MAGANOY) (Capital)',
                    173,
                    1538,
                    153808,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATANOG', 173, 1538, 153809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGALUNGAN', 173, 1538, 153810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANG', 173, 1538, 153811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN KUDARAT (NULING)', 173, 1538, 153812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SULTAN SA BARONGIS (LAMBAYONG)',
                    173,
                    1538,
                    153813,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABUNTALAN (TUMBAO)', 173, 1538, 153814, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UPI', 173, 1538, 153815, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAYAN', 173, 1538, 153816, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOUTH UPI', 173, 1538, 153817, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARIRA', 173, 1538, 153818, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GEN. S. K. PENDATUN', 173, 1538, 153819, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMASAPANO', 173, 1538, 153820, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALITAY', 173, 1538, 153821, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGAGAWAN', 173, 1538, 153822, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGLAT', 173, 1538, 153823, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN MASTURA', 173, 1538, 153824, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINDULUNGAN', 173, 1538, 153825, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU SAUDI-AMPATUAN', 173, 1538, 153826, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU UNSAY', 173, 1538, 153827, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ABDULLAH SANGKI', 173, 1538, 153828, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAJAH BUAYAN', 173, 1538, 153829, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU BLAH T. SINSUAT', 173, 1538, 153830, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ANGGAL MIDTIMBANG', 173, 1538, 153831, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGUDADATU', 173, 1538, 153832, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAG', 173, 1538, 153833, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORTHERN KABUNTALAN', 173, 1538, 153834, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU HOFFER AMPATUAN', 173, 1538, 153835, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU SALIBO', 173, 1538, 153836, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SHARIFF SAYDONA MUSTAPHA', 173, 1538, 153837, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INDANAN', 173, 1566, 156601, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOLO (Capital)', 173, 1566, 156602, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALINGALAN CALUANG', 173, 1566, 156603, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUUK', 173, 1566, 156604, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAIMBUNG', 173, 1566, 156605, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'HADJI PANGLIMA TAHIL (MARUNGGAS)',
                    173,
                    1566,
                    156606,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLD PANAMAO', 173, 1566, 156607, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGUTARAN', 173, 1566, 156608, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANG', 173, 1566, 156609, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATA', 173, 1566, 156610, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATIKUL', 173, 1566, 156611, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIASI', 173, 1566, 156612, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALIPAO', 173, 1566, 156613, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAPUL', 173, 1566, 156614, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TONGKIL', 173, 1566, 156615, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PANGLIMA ESTINO (NEW PANAMAO)',
                    173,
                    1566,
                    156616,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUGUS', 173, 1566, 156617, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAMI', 173, 1566, 156618, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OMAR', 173, 1566, 156619, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGLIMA SUGALA (BALIMBING)', 173, 1570, 157001, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGAO (Capital)', 173, 1570, 157002, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPUN (CAGAYAN DE TAWI-TAWI)', 173, 1570, 157003, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIMUNUL', 173, 1570, 157004, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SITANGKAI', 173, 1570, 157005, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOUTH UBIAN', 173, 1570, 157006, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANDUBAS', 173, 1570, 157007, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TURTLE ISLANDS', 173, 1570, 157008, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANGUYAN', 173, 1570, 157009, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPA-SAPA', 173, 1570, 157010, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUTU', 173, 1570, 157011, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 1602, 160201, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUTUAN CITY (Capital)', 173, 1602, 160202, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CABADBARAN', 173, 1602, 160203, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1602, 160204, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JABONGA', 173, 1602, 160205, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KITCHARAO', 173, 1602, 160206, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAS NIEVES', 173, 1602, 160207, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 1602, 160208, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NASIPIT', 173, 1602, 160209, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTIAGO', 173, 1602, 160210, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAY', 173, 1602, 160211, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REMEDIOS T. ROMUALDEZ', 173, 1602, 160212, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYUGAN', 173, 1603, 160301, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUNAWAN', 173, 1603, 160302, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 1603, 160303, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 1603, 160304, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LORETO', 173, 1603, 160305, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PROSPERIDAD (Capital)', 173, 1603, 160306, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 1603, 160307, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 1603, 160308, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 1603, 160309, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA JOSEFA', 173, 1603, 160310, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALACOGON', 173, 1603, 160311, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRENTO', 173, 1603, 160312, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VERUELA', 173, 1603, 160313, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBAGAT', 173, 1603, 160314, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEGRIA', 173, 1667, 166701, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACUAG', 173, 1667, 166702, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 1667, 166704, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVER', 173, 1667, 166706, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAPA', 173, 1667, 166707, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DEL CARMEN', 173, 1667, 166708, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL LUNA', 173, 1667, 166710, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIGAQUIT', 173, 1667, 166711, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAINIT', 173, 1667, 166714, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALIMONO', 173, 1667, 166715, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 1667, 166716, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLACER', 173, 1667, 166717, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN BENITO', 173, 1667, 166718, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO (ANAO-AON)', 173, 1667, 166719, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1667, 166720, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MONICA (SAPAO)', 173, 1667, 166721, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SISON', 173, 1667, 166722, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOCORRO', 173, 1667, 166723, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SURIGAO CITY (Capital)', 173, 1667, 166724, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGANA-AN', 173, 1667, 166725, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBOD', 173, 1667, 166727, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROBO', 173, 1668, 166801, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYABAS', 173, 1668, 166802, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BISLIG', 173, 1668, 166803, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGWAIT', 173, 1668, 166804, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANTILAN', 173, 1668, 166805, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1668, 166806, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARRASCAL', 173, 1668, 166807, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORTES', 173, 1668, 166808, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINATUAN', 173, 1668, 166809, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANUZA', 173, 1668, 166810, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIANGA', 173, 1668, 166811, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINGIG', 173, 1668, 166812, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADRID', 173, 1668, 166813, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIHATAG', 173, 1668, 166814, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 1668, 166815, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 1668, 166816, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGBINA', 173, 1668, 166817, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGO', 173, 1668, 166818, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANDAG (Capital)', 173, 1668, 166819, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASILISA (RIZAL)', 173, 1685, 168501, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGDIANAO', 173, 1685, 168502, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAGAT', 173, 1685, 168503, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBJO (ALBOR)', 173, 1685, 168504, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LORETO', 173, 1685, 168505, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE (Capital)', 173, 1685, 168506, (select pk from users limit 1));
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAJON', 173, 1685, 168507, (select pk from users limit 1));
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate cities;
        `);
    }

}
