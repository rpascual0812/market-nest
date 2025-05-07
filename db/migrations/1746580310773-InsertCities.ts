import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertCities1746580310773 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ADAMS', 173, 128, 12801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACARRA', 173, 128, 12802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADOC', 173, 128, 12803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGUI', 173, 128, 12804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BATAC', 173, 128, 12805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 128, 12806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARASI', 173, 128, 12807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CURRIMAO', 173, 128, 12808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGRAS', 173, 128, 12809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALNEG', 173, 128, 12810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANNA (ESPIRITU)', 173, 128, 12811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOAG CITY (Capital)', 173, 128, 12812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARCOS', 173, 128, 12813, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUEVA ERA', 173, 128, 12814, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGUDPUD', 173, 128, 12815, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAOAY', 173, 128, 12816, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASUQUIN', 173, 128, 12817, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIDDIG', 173, 128, 12818, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINILI', 173, 128, 12819, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 128, 12820, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARRAT', 173, 128, 12821, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLSONA', 173, 128, 12822, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINTAR', 173, 128, 12823, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALILEM', 173, 129, 12901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAYOYO', 173, 129, 12902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTAY', 173, 129, 12903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 129, 12904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUGAO', 173, 129, 12905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CANDON', 173, 129, 12906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAOAYAN', 173, 129, 12907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CERVANTES', 173, 129, 12908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GALIMUYOD', 173, 129, 12909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'GREGORIO DEL PILAR (CONCEPCION)',
                    173,
                    129,
                    12910,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIDLIDDA', 173, 129, 12911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSINGAL', 173, 129, 12912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGBUKEL', 173, 129, 12913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NARVACAN', 173, 129, 12914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIRINO (ANGKAKI)', 173, 129, 12915, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALCEDO (BAUGEN)', 173, 129, 12916, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN EMILIO', 173, 129, 12917, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ESTEBAN', 173, 129, 12918, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ILDEFONSO', 173, 129, 12919, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN (LAPOG)', 173, 129, 12920, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 129, 12921, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA', 173, 129, 12922, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CATALINA', 173, 129, 12923, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 129, 12924, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA LUCIA', 173, 129, 12925, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 129, 12926, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTIAGO', 173, 129, 12927, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO', 173, 129, 12928, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIGAY', 173, 129, 12929, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINAIT', 173, 129, 12930, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUGPON', 173, 129, 12931, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUYO', 173, 129, 12932, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGUDIN', 173, 129, 12933, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VIGAN (Capital)', 173, 129, 12934, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGOO', 173, 133, 13301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARINGAY', 173, 133, 13302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACNOTAN', 173, 133, 13303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGULIN', 173, 133, 13304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAOAN', 173, 133, 13305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGAR', 173, 133, 13306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUANG', 173, 133, 13307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 133, 13308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABA', 173, 133, 13309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 133, 13310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGUILIAN', 173, 133, 13311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUGO', 173, 133, 13312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 133, 13313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN FERNANDO (Capital)', 173, 133, 13314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN GABRIEL', 173, 133, 13315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 133, 13316, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 133, 13317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTOL', 173, 133, 13318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUDIPEN', 173, 133, 13319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAO', 173, 133, 13320, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGNO', 173, 155, 15501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUILAR', 173, 155, 15502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ALAMINOS', 173, 155, 15503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCALA', 173, 155, 15504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANDA', 173, 155, 15505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASINGAN', 173, 155, 15506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALUNGAO', 173, 155, 15507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANI', 173, 155, 15508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASISTA', 173, 155, 15509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUTISTA', 173, 155, 15510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYAMBANG', 173, 155, 15511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINALONAN', 173, 155, 15512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINMALEY', 173, 155, 15513, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLINAO', 173, 155, 15514, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGALLON', 173, 155, 15515, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 155, 15516, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALASIAO', 173, 155, 15517, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGUPAN CITY', 173, 155, 15518, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DASOL', 173, 155, 15519, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INFANTA', 173, 155, 15520, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABRADOR', 173, 155, 15521, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINGAYEN (Capital)', 173, 155, 15522, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 155, 15523, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALASIQUI', 173, 155, 15524, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAOAG', 173, 155, 15525, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGALDAN', 173, 155, 15526, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGATAREM', 173, 155, 15527, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPANDAN', 173, 155, 15528, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NATIVIDAD', 173, 155, 15529, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POZORRUBIO', 173, 155, 15530, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSALES', 173, 155, 15531, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CARLOS CITY', 173, 155, 15532, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FABIAN', 173, 155, 15533, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JACINTO', 173, 155, 15534, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 155, 15535, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 155, 15536, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN QUINTIN', 173, 155, 15537, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA BARBARA', 173, 155, 15538, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 155, 15539, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 155, 15540, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SISON', 173, 155, 15541, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUAL', 173, 155, 15542, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYUG', 173, 155, 15543, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UMINGAN', 173, 155, 15544, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('URBIZTONDO', 173, 155, 15545, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF URDANETA', 173, 155, 15546, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLASIS', 173, 155, 15547, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOAC', 173, 155, 15548, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASCO (Capital)', 173, 209, 20901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ITBAYAT', 173, 209, 20902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IVANA', 173, 209, 20903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHATAO', 173, 209, 20904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABTANG', 173, 209, 20905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UYUGAN', 173, 209, 20906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABULUG', 173, 215, 21501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCALA', 173, 215, 21502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALLACAPAN', 173, 215, 21503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMULUNG', 173, 215, 21504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('APARRI', 173, 215, 21505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGGAO', 173, 215, 21506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALLESTEROS', 173, 215, 21507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGUEY', 173, 215, 21508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAYAN', 173, 215, 21509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALANIUGAN', 173, 215, 21510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 215, 21511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRILE', 173, 215, 21512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GATTARAN', 173, 215, 21513, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GONZAGA', 173, 215, 21514, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IGUIG', 173, 215, 21515, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAL-LO', 173, 215, 21516, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LASAM', 173, 215, 21517, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 215, 21518, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑABLANCA', 173, 215, 21519, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIAT', 173, 215, 21520, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 215, 21521, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANCHEZ-MIRA', 173, 215, 21522, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 215, 21523, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA PRAXEDES', 173, 215, 21524, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA TERESITA', 173, 215, 21525, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO (FAIRE)', 173, 215, 21526, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLANA', 173, 215, 21527, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUAO', 173, 215, 21528, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUGUEGARAO CITY (Capital)', 173, 215, 21529, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 231, 23101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGADANAN', 173, 231, 23102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AURORA', 173, 231, 23103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BENITO SOLIVEN', 173, 231, 23104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 231, 23105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABAGAN', 173, 231, 23106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABATUAN', 173, 231, 23107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CAUAYAN', 173, 231, 23108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORDON', 173, 231, 23109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAPIGUE', 173, 231, 23110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIVILACAN', 173, 231, 23111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ECHAGUE', 173, 231, 23112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAMU', 173, 231, 23113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILAGAN CITY (Capital)', 173, 231, 23114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JONES', 173, 231, 23115, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 231, 23116, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACONACON', 173, 231, 23117, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DELFIN ALBANO (MAGSAYSAY)', 173, 231, 23118, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALLIG', 173, 231, 23119, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGUILIAN', 173, 231, 23120, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALANAN', 173, 231, 23121, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 231, 23122, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIRINO', 173, 231, 23123, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMON', 173, 231, 23124, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REINA MERCEDES', 173, 231, 23125, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 231, 23126, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 231, 23127, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN GUILLERMO', 173, 231, 23128, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 231, 23129, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 231, 23130, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MARIANO', 173, 231, 23131, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MATEO', 173, 231, 23132, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO', 173, 231, 23133, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 231, 23134, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SANTIAGO', 173, 231, 23135, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 231, 23136, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUMAUINI', 173, 231, 23137, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMBAGUIO', 173, 250, 25001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARITAO', 173, 250, 25002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGABAG', 173, 250, 25003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAMBANG', 173, 250, 25004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYOMBONG (Capital)', 173, 250, 25005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIADI', 173, 250, 25006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUPAX DEL NORTE', 173, 250, 25007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUPAX DEL SUR', 173, 250, 25008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KASIBU', 173, 250, 25009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAYAPA', 173, 250, 25010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 250, 25011, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 250, 25012, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOLANO', 173, 250, 25013, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAVERDE', 173, 250, 25014, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO CASTANEDA', 173, 250, 25015, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGLIPAY', 173, 257, 25701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABARROGUIS (Capital)', 173, 257, 25702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIFFUN', 173, 257, 25703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADDELA', 173, 257, 25704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGUDAY', 173, 257, 25705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGTIPUNAN', 173, 257, 25706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABUCAY', 173, 308, 30801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGAC', 173, 308, 30802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BALANGA (Capital)', 173, 308, 30803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINALUPIHAN', 173, 308, 30804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HERMOSA', 173, 308, 30805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIMAY', 173, 308, 30806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIVELES', 173, 308, 30807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MORONG', 173, 308, 30808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORANI', 173, 308, 30809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORION', 173, 308, 30810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 308, 30811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMAL', 173, 308, 30812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGAT', 173, 314, 31401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAGTAS (BIGAA)', 173, 314, 31402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIUAG', 173, 314, 31403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOCAUE', 173, 314, 31404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULACAN', 173, 314, 31405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUSTOS', 173, 314, 31406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUMPIT', 173, 314, 31407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIGUINTO', 173, 314, 31408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAGONOY', 173, 314, 31409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALOLOS (Capital)', 173, 314, 31410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARILAO', 173, 314, 31411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MEYCAUAYAN', 173, 314, 31412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORZAGARAY', 173, 314, 31413, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OBANDO', 173, 314, 31414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDI', 173, 314, 31415, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAOMBONG', 173, 314, 31416, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 314, 31417, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PULILAN', 173, 314, 31418, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ILDEFONSO', 173, 314, 31419, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN JOSE DEL MONTE', 173, 314, 31420, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 314, 31421, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RAFAEL', 173, 314, 31422, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 314, 31423, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOÑA REMEDIOS TRINIDAD', 173, 314, 31424, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALIAGA', 173, 349, 34901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGABON', 173, 349, 34902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANATUAN CITY', 173, 349, 34903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABIAO', 173, 349, 34904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARRANGLAN', 173, 349, 34905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUYAPO', 173, 349, 34906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GABALDON (BITULOK & SABANI)', 173, 349, 34907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF GAPAN', 173, 349, 34908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL MAMERTO NATIVIDAD', 173, 349, 34909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL TINIO (PAPAYA)', 173, 349, 34910, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIMBA', 173, 349, 34911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAEN', 173, 349, 34912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUR', 173, 349, 34913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LICAB', 173, 349, 34914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LLANERA', 173, 349, 34915, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPAO', 173, 349, 34916, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SCIENCE CITY OF MUÑOZ', 173, 349, 34917, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAMPICUAN', 173, 349, 34918, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAYAN CITY (Capital)', 173, 349, 34919, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTABANGAN', 173, 349, 34920, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑARANDA', 173, 349, 34921, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 349, 34922, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 349, 34923, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 349, 34924, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 349, 34925, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE CITY', 173, 349, 34926, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LEONARDO', 173, 349, 34927, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ROSA', 173, 349, 34928, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO', 173, 349, 34929, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAVERA', 173, 349, 34930, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALUGTUG', 173, 349, 34931, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZARAGOZA', 173, 349, 34932, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGELES CITY', 173, 354, 35401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('APALIT', 173, 354, 35402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARAYAT', 173, 354, 35403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOR', 173, 354, 35404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDABA', 173, 354, 35405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FLORIDABLANCA', 173, 354, 35406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUAGUA', 173, 354, 35407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBAO', 173, 354, 35408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABALACAT CITY', 173, 354, 35409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACABEBE', 173, 354, 35410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALANG', 173, 354, 35411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASANTOL', 173, 354, 35412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEXICO', 173, 354, 35413, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINALIN', 173, 354, 35414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORAC', 173, 354, 35415, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN FERNANDO (Capital)', 173, 354, 35416, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 354, 35417, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN SIMON', 173, 354, 35418, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 354, 35419, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA RITA', 173, 354, 35420, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 354, 35421, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SASMUAN (Sexmoan)', 173, 354, 35422, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANAO', 173, 369, 36901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAMBAN', 173, 369, 36902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMILING', 173, 369, 36903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPAS', 173, 369, 36904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 369, 36905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GERONA', 173, 369, 36906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 369, 36907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYANTOC', 173, 369, 36908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONCADA', 173, 369, 36909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANIQUI', 173, 369, 36910, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PURA', 173, 369, 36911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMOS', 173, 369, 36912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CLEMENTE', 173, 369, 36913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MANUEL', 173, 369, 36914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA IGNACIA', 173, 369, 36915, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TARLAC (Capital)', 173, 369, 36916, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 369, 36917, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 369, 36918, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOTOLAN', 173, 371, 37101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANGAN', 173, 371, 37102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDELARIA', 173, 371, 37103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASTILLEJOS', 173, 371, 37104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBA (Capital)', 173, 371, 37105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASINLOC', 173, 371, 37106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLONGAPO CITY', 173, 371, 37107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAUIG', 173, 371, 37108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 371, 37109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FELIPE', 173, 371, 37110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MARCELINO', 173, 371, 37111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NARCISO', 173, 371, 37112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 371, 37113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUBIC', 173, 371, 37114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALER (Capital)', 173, 377, 37701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASIGURAN', 173, 377, 37702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DILASAG', 173, 377, 37703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINALUNGAN', 173, 377, 37704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGALAN', 173, 377, 37705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPACULAO', 173, 377, 37706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIA AURORA', 173, 377, 37707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 377, 37708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGONCILLO', 173, 410, 41001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALITAGTAG', 173, 410, 41002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAYAN', 173, 410, 41003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALETE', 173, 410, 41004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATANGAS CITY (Capital)', 173, 410, 41005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUAN', 173, 410, 41006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALACA', 173, 410, 41007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATAGAN', 173, 410, 41008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUENCA', 173, 410, 41009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBAAN', 173, 410, 41010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUREL', 173, 410, 41011, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEMERY', 173, 410, 41012, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIAN', 173, 410, 41013, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIPA CITY', 173, 410, 41014, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOBO', 173, 410, 41015, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 410, 41016, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALVAR', 173, 410, 41017, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATAASNAKAHOY', 173, 410, 41018, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NASUGBU', 173, 410, 41019, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE GARCIA', 173, 410, 41020, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 410, 41021, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 410, 41022, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 410, 41023, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 410, 41024, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 410, 41025, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PASCUAL', 173, 410, 41026, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA TERESITA', 173, 410, 41027, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 410, 41028, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAAL', 173, 410, 41029, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAY', 173, 410, 41030, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANAUAN', 173, 410, 41031, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYSAN', 173, 410, 41032, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINGLOY', 173, 410, 41033, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUY', 173, 410, 41034, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO', 173, 421, 42101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMADEO', 173, 421, 42102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOOR CITY', 173, 421, 42103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMONA', 173, 421, 42104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAVITE CITY', 173, 421, 42105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF DASMARIÑAS', 173, 421, 42106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL EMILIO AGUINALDO', 173, 421, 42107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL TRIAS', 173, 421, 42108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMUS CITY', 173, 421, 42109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INDANG', 173, 421, 42110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAWIT', 173, 421, 42111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 421, 42112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAGONDON', 173, 421, 42113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MENDEZ (MENDEZ-NUÑEZ)', 173, 421, 42114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAIC', 173, 421, 42115, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NOVELETA', 173, 421, 42116, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 421, 42117, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILANG', 173, 421, 42118, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGAYTAY CITY', 173, 421, 42119, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANZA', 173, 421, 42120, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TERNATE', 173, 421, 42121, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRECE MARTIRES CITY (Capital)', 173, 421, 42122, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GEN. MARIANO ALVAREZ', 173, 421, 42123, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALAMINOS', 173, 434, 43401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAY', 173, 434, 43402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BIÑAN', 173, 434, 43403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUYAO CITY', 173, 434, 43404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CALAMBA', 173, 434, 43405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAUAN', 173, 434, 43406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAVINTI', 173, 434, 43407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FAMY', 173, 434, 43408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAYAAN', 173, 434, 43409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILIW', 173, 434, 43410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOS BAÑOS', 173, 434, 43411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUISIANA', 173, 434, 43412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBAN', 173, 434, 43413, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABITAC', 173, 434, 43414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGDALENA', 173, 434, 43415, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAJAYJAY', 173, 434, 43416, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGCARLAN', 173, 434, 43417, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAETE', 173, 434, 43418, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGSANJAN', 173, 434, 43419, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAKIL', 173, 434, 43420, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGIL', 173, 434, 43421, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILA', 173, 434, 43422, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 434, 43423, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO CITY', 173, 434, 43424, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN PEDRO', 173, 434, 43425, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ (Capital)', 173, 434, 43426, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 434, 43427, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SANTA ROSA', 173, 434, 43428, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINILOAN', 173, 434, 43429, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 434, 43430, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGDANGAN', 173, 456, 45601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALABAT', 173, 456, 45602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ATIMONAN', 173, 456, 45603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 456, 45605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURDEOS', 173, 456, 45606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAUAG', 173, 456, 45607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDELARIA', 173, 456, 45608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATANAUAN', 173, 456, 45610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 456, 45615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL LUNA', 173, 456, 45616, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL NAKAR', 173, 456, 45617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINAYANGAN', 173, 456, 45618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUMACA', 173, 456, 45619, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INFANTA', 173, 456, 45620, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOMALIG', 173, 456, 45621, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPEZ', 173, 456, 45622, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUCBAN', 173, 456, 45623, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUCENA CITY (Capital)', 173, 456, 45624, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACALELON', 173, 456, 45625, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAUBAN', 173, 456, 45627, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MULANAY', 173, 456, 45628, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE BURGOS', 173, 456, 45629, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGBILAO', 173, 456, 45630, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANUKULAN', 173, 456, 45631, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATNANUNGAN', 173, 456, 45632, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEREZ', 173, 456, 45633, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PITOGO', 173, 456, 45634, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 456, 45635, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLILLO', 173, 456, 45636, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 456, 45637, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REAL', 173, 456, 45638, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMPALOC', 173, 456, 45639, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES', 173, 456, 45640, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 456, 45641, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO (AURORA)', 173, 456, 45642, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NARCISO', 173, 456, 45644, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARIAYA', 173, 456, 45645, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGKAWAYAN', 173, 456, 45646, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TAYABAS', 173, 456, 45647, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIAONG', 173, 456, 45648, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UNISAN', 173, 456, 45649, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANGONO', 173, 458, 45801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ANTIPOLO', 173, 458, 45802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARAS', 173, 458, 45803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINANGONAN', 173, 458, 45804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAINTA', 173, 458, 45805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARDONA', 173, 458, 45806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JALA-JALA', 173, 458, 45807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RODRIGUEZ (MONTALBAN)', 173, 458, 45808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MORONG', 173, 458, 45809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILILLA', 173, 458, 45810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MATEO', 173, 458, 45811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANAY', 173, 458, 45812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYTAY', 173, 458, 45813, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TERESA', 173, 458, 45814, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOAC (Capital)', 173, 1740, 174001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 1740, 174002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GASAN', 173, 1740, 174003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOGPOG', 173, 1740, 174004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1740, 174005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TORRIJOS', 173, 1740, 174006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABRA DE ILOG', 173, 1751, 175101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALINTAAN', 173, 1751, 175102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOOC', 173, 1751, 175103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBANG', 173, 1751, 175104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1751, 175105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBURAO (Capital)', 173, 1751, 175106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALUAN', 173, 1751, 175107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 1751, 175108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABLAYAN', 173, 1751, 175109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 1751, 175110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1751, 175111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACO', 173, 1752, 175201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANSUD', 173, 1752, 175202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGABONG', 173, 1752, 175203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULALACAO (SAN PEDRO)', 173, 1752, 175204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CALAPAN (Capital)', 173, 1752, 175205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GLORIA', 173, 1752, 175206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANSALAY', 173, 1752, 175207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAUJAN', 173, 1752, 175208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINAMALAYAN', 173, 1752, 175209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLA', 173, 1752, 175210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUERTO GALERA', 173, 1752, 175211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 1752, 175212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN TEODORO', 173, 1752, 175213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOCORRO', 173, 1752, 175214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 1752, 175215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABORLAN', 173, 1753, 175301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUTAYA', 173, 1753, 175302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARACELI', 173, 1753, 175303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALABAC', 173, 1753, 175304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATARAZA', 173, 1753, 175305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BROOKE''S POINT', 173, 1753, 175306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUSUANGA', 173, 1753, 175307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGAYANCILLO', 173, 1753, 175308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORON', 173, 1753, 175309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUYO', 173, 1753, 175310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMARAN', 173, 1753, 175311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('EL NIDO (BACUIT)', 173, 1753, 175312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINAPACAN', 173, 1753, 175313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1753, 175314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NARRA', 173, 1753, 175315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PUERTO PRINCESA CITY (Capital)',
                    173,
                    1753,
                    175316,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 1753, 175317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS', 173, 1753, 175318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 1753, 175319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYTAY', 173, 1753, 175320, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAYAAN', 173, 1753, 175321, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULION', 173, 1753, 175322, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL (MARCOS)', 173, 1753, 175323, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOFRONIO ESPAÑOLA', 173, 1753, 175324, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCANTARA', 173, 1759, 175901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTON', 173, 1759, 175902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAJIDIOCAN', 173, 1759, 175903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATRAVA', 173, 1759, 175904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 1759, 175905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORCUERA', 173, 1759, 175906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOOC', 173, 1759, 175907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGDIWANG', 173, 1759, 175908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ODIONGAN', 173, 1759, 175909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROMBLON (Capital)', 173, 1759, 175910, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 1759, 175911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES', 173, 1759, 175912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 1759, 175913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 1759, 175914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 1759, 175915, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FERROL', 173, 1759, 175916, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA (IMELDA)', 173, 1759, 175917, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACACAY', 173, 505, 50501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALIG', 173, 505, 50502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DARAGA (LOCSIN)', 173, 505, 50503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINOBATAN', 173, 505, 50504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOVELLAR', 173, 505, 50505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEGAZPI CITY (Capital)', 173, 505, 50506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBON', 173, 505, 50507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LIGAO', 173, 505, 50508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALILIPOT', 173, 505, 50509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALINAO', 173, 505, 50510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANITO', 173, 505, 50511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OAS', 173, 505, 50512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIO DURAN', 173, 505, 50513, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLANGUI', 173, 505, 50514, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAPU-RAPU', 173, 505, 50515, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO DOMINGO (LIBOG)', 173, 505, 50516, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TABACO', 173, 505, 50517, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIWI', 173, 505, 50518, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASUD', 173, 516, 51601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPALONGA', 173, 516, 51602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAET (Capital)', 173, 516, 51603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LORENZO RUIZ (IMELDA)', 173, 516, 51604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE PANGANIBAN', 173, 516, 51605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABO', 173, 516, 51606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERCEDES', 173, 516, 51607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARACALE', 173, 516, 51608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 516, 51609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ELENA', 173, 516, 51610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAY', 173, 516, 51611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINZONS', 173, 516, 51612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAAO', 173, 517, 51701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALATAN', 173, 517, 51702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 517, 51703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOMBON', 173, 517, 51704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUHI', 173, 517, 51705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULA', 173, 517, 51706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUSAO', 173, 517, 51707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALABANGA', 173, 517, 51708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAMALIGAN', 173, 517, 51709, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANAMAN', 173, 517, 51710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAMOAN', 173, 517, 51711, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DEL GALLEGO', 173, 517, 51712, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAINZA', 173, 517, 51713, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GARCHITORENA', 173, 517, 51714, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GOA', 173, 517, 51715, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IRIGA CITY', 173, 517, 51716, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGONOY', 173, 517, 51717, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBMANAN', 173, 517, 51718, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPI', 173, 517, 51719, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGARAO', 173, 517, 51720, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MILAOR', 173, 517, 51721, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINALABAC', 173, 517, 51722, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABUA', 173, 517, 51723, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGA CITY', 173, 517, 51724, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OCAMPO', 173, 517, 51725, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 517, 51726, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASACAO', 173, 517, 51727, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILI (Capital)', 173, 517, 51728, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESENTACION (PARUBCAN)', 173, 517, 51729, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAGAY', 173, 517, 51730, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGÑAY', 173, 517, 51731, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 517, 51732, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 517, 51733, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIPOCOT', 173, 517, 51734, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIRUMA', 173, 517, 51735, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGAON', 173, 517, 51736, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINAMBAC', 173, 517, 51737, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGAMANOC', 173, 520, 52001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARAS', 173, 520, 52002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 520, 52003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAMORAN', 173, 520, 52004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIGMOTO', 173, 520, 52005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAN', 173, 520, 52006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGANIBAN (PAYO)', 173, 520, 52007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANDRES (CALOLBON)', 173, 520, 52008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 520, 52009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VIGA', 173, 520, 52010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VIRAC (Capital)', 173, 520, 52011, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AROROY', 173, 541, 54101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALENO', 173, 541, 54102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALUD', 173, 541, 54103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATUAN', 173, 541, 54104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATAINGAN', 173, 541, 54105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAWAYAN', 173, 541, 54106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 541, 54107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMASALANG', 173, 541, 54108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 541, 54109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANDAON', 173, 541, 54110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MASBATE (Capital)', 173, 541, 54111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MILAGROS', 173, 541, 54112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOBO', 173, 541, 54113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONREAL', 173, 541, 54114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALANAS', 173, 541, 54115, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIO V. CORPUZ (LIMBUHAN)', 173, 541, 54116, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLACER', 173, 541, 54117, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 541, 54118, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JACINTO', 173, 541, 54119, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PASCUAL', 173, 541, 54120, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('USON', 173, 541, 54121, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARCELONA', 173, 562, 56202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULAN', 173, 562, 56203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULUSAN', 173, 562, 56204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASIGURAN', 173, 562, 56205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CASTILLA', 173, 562, 56206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DONSOL', 173, 562, 56207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUBAT', 173, 562, 56208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IROSIN', 173, 562, 56209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JUBAN', 173, 562, 56210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 562, 56211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATNOG', 173, 562, 56212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 562, 56213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRIETO DIAZ', 173, 562, 56214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MAGDALENA', 173, 562, 56215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SORSOGON (Capital)', 173, 562, 56216, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALTAVAS', 173, 604, 60401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALETE', 173, 604, 60402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGA', 173, 604, 60403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATAN', 173, 604, 60404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURUANGA', 173, 604, 60405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IBAJAY', 173, 604, 60406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALIBO (Capital)', 173, 604, 60407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEZO', 173, 604, 60408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBACAO', 173, 604, 60409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADALAG', 173, 604, 60410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAKATO', 173, 604, 60411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALAY', 173, 604, 60412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALINAO', 173, 604, 60413, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABAS', 173, 604, 60414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW WASHINGTON', 173, 604, 60415, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUMANCIA', 173, 604, 60416, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGALAN', 173, 604, 60417, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANINI-Y', 173, 606, 60601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARBAZA', 173, 606, 60602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BELISON', 173, 606, 60603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGASONG', 173, 606, 60604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUYA', 173, 606, 60605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULASI', 173, 606, 60606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOBIAS FORNIER (DAO)', 173, 606, 60607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAMTIC', 173, 606, 60608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAUA-AN', 173, 606, 60609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBERTAD', 173, 606, 60610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAN', 173, 606, 60611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATNONGON', 173, 606, 60612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE (Capital)', 173, 606, 60613, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN REMIGIO', 173, 606, 60614, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEBASTE', 173, 606, 60615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBALOM', 173, 606, 60616, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIBIAO', 173, 606, 60617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALDERRAMA', 173, 606, 60618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CUARTERO', 173, 619, 61901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAO', 173, 619, 61902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALAG', 173, 619, 61903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMARAO', 173, 619, 61904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IVISAN', 173, 619, 61905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAMINDAN', 173, 619, 61906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MA-AYON', 173, 619, 61907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBUSAO', 173, 619, 61908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANAY', 173, 619, 61909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANITAN', 173, 619, 61910, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 619, 61911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PONTEVEDRA', 173, 619, 61912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT ROXAS', 173, 619, 61913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROXAS CITY (Capital)', 173, 619, 61914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPI-AN', 173, 619, 61915, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIGMA', 173, 619, 61916, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAPAZ', 173, 619, 61917, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AJUY', 173, 630, 63001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALIMODIAN', 173, 630, 63002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANILAO', 173, 630, 63003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADIANGAN', 173, 630, 63004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALASAN', 173, 630, 63005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANATE', 173, 630, 63006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROTAC NUEVO', 173, 630, 63007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROTAC VIEJO', 173, 630, 63008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATAD', 173, 630, 63009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINGAWAN', 173, 630, 63010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABATUAN', 173, 630, 63012, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALINOG', 173, 630, 63013, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARLES', 173, 630, 63014, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 630, 63015, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINGLE', 173, 630, 63016, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUEÑAS', 173, 630, 63017, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMANGAS', 173, 630, 63018, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESTANCIA', 173, 630, 63019, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIMBAL', 173, 630, 63020, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IGBARAS', 173, 630, 63021, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILOILO CITY (Capital)', 173, 630, 63022, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JANIUAY', 173, 630, 63023, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMBUNAO', 173, 630, 63025, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEGANES', 173, 630, 63026, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEMERY', 173, 630, 63027, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEON', 173, 630, 63028, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAASIN', 173, 630, 63029, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIAGAO', 173, 630, 63030, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINA', 173, 630, 63031, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW LUCENA', 173, 630, 63032, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OTON', 173, 630, 63034, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PASSI', 173, 630, 63035, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAVIA', 173, 630, 63036, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POTOTAN', 173, 630, 63037, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN DIONISIO', 173, 630, 63038, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ENRIQUE', 173, 630, 63039, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOAQUIN', 173, 630, 63040, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 630, 63041, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RAFAEL', 173, 630, 63042, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA BARBARA', 173, 630, 63043, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARA', 173, 630, 63044, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGBAUAN', 173, 630, 63045, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBUNGAN', 173, 630, 63046, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZARRAGA', 173, 630, 63047, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOD CITY (Capital)', 173, 645, 64501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGO CITY', 173, 645, 64502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINALBAGAN', 173, 645, 64503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CADIZ CITY', 173, 645, 64504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALATRAVA', 173, 645, 64505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDONI', 173, 645, 64506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAUAYAN', 173, 645, 64507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRIQUE B. MAGALONA (SARAVIA)', 173, 645, 64508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ESCALANTE', 173, 645, 64509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF HIMAMAYLAN', 173, 645, 64510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINIGARAN', 173, 645, 64511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINOBA-AN (ASIA)', 173, 645, 64512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILOG', 173, 645, 64513, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISABELA', 173, 645, 64514, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KABANKALAN', 173, 645, 64515, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA CARLOTA CITY', 173, 645, 64516, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA CASTELLANA', 173, 645, 64517, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAPLA', 173, 645, 64518, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOISES PADILLA (MAGALLON)', 173, 645, 64519, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MURCIA', 173, 645, 64520, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PONTEVEDRA', 173, 645, 64521, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PULUPANDAN', 173, 645, 64522, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGAY CITY', 173, 645, 64523, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN CARLOS CITY', 173, 645, 64524, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ENRIQUE', 173, 645, 64525, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILAY CITY', 173, 645, 64526, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SIPALAY', 173, 645, 64527, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TALISAY', 173, 645, 64528, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOBOSO', 173, 645, 64529, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALLADOLID', 173, 645, 64530, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VICTORIAS', 173, 645, 64531, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALVADOR BENEDICTO', 173, 645, 64532, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 679, 67901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JORDAN (Capital)', 173, 679, 67902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUEVA VALENCIA', 173, 679, 67903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LORENZO', 173, 679, 67904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUNAG', 173, 679, 67905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALBURQUERQUE', 173, 712, 71201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 712, 71202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANDA', 173, 712, 71203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANTEQUERA', 173, 712, 71204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACLAYON', 173, 712, 71205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALILIHAN', 173, 712, 71206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATUAN', 173, 712, 71207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BILAR', 173, 712, 71208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 712, 71209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAPE', 173, 712, 71210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANDIJAY', 173, 712, 71211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 712, 71212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATIGBIAN', 173, 712, 71213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLARIN', 173, 712, 71214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORELLA', 173, 712, 71215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORTES', 173, 712, 71216, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGOHOY', 173, 712, 71217, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANAO', 173, 712, 71218, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAUIS', 173, 712, 71219, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMIAO', 173, 712, 71220, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUERO', 173, 712, 71221, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GARCIA HERNANDEZ', 173, 712, 71222, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINDULMAN', 173, 712, 71223, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INABANGA', 173, 712, 71224, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAGNA', 173, 712, 71225, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JETAFE', 173, 712, 71226, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILA', 173, 712, 71227, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOAY', 173, 712, 71228, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOBOC', 173, 712, 71229, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOON', 173, 712, 71230, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI', 173, 712, 71231, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIBOJOC', 173, 712, 71232, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGLAO', 173, 712, 71233, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 712, 71234, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PRES. CARLOS P. GARCIA (PITOGO)',
                    173,
                    712,
                    71235,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGBAYAN (BORJA)', 173, 712, 71236, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 712, 71237, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 712, 71238, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEVILLA', 173, 712, 71239, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIERRA BULLONES', 173, 712, 71240, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIKATUNA', 173, 712, 71241, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGBILARAN CITY (Capital)', 173, 712, 71242, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALIBON', 173, 712, 71243, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRINIDAD', 173, 712, 71244, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBIGON', 173, 712, 71245, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UBAY', 173, 712, 71246, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALENCIA', 173, 712, 71247, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BIEN UNIDO', 173, 712, 71248, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCANTARA', 173, 722, 72201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALCOY', 173, 722, 72202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEGRIA', 173, 722, 72203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALOGUINSAN', 173, 722, 72204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARGAO', 173, 722, 72205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASTURIAS', 173, 722, 72206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BADIAN', 173, 722, 72207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALAMBAN', 173, 722, 72208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANTAYAN', 173, 722, 72209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARILI', 173, 722, 72210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BOGO', 173, 722, 72211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLJOON', 173, 722, 72212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BORBON', 173, 722, 72213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CARCAR', 173, 722, 72214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 722, 72215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATMON', 173, 722, 72216, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CEBU CITY (Capital)', 173, 722, 72217, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COMPOSTELA', 173, 722, 72218, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONSOLACION', 173, 722, 72219, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORDOVA', 173, 722, 72220, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAANBANTAYAN', 173, 722, 72221, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DALAGUETE', 173, 722, 72222, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANAO CITY', 173, 722, 72223, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMANJUG', 173, 722, 72224, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GINATILAN', 173, 722, 72225, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPU-LAPU CITY (OPON)', 173, 722, 72226, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOAN', 173, 722, 72227, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADRIDEJOS', 173, 722, 72228, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALABUYOC', 173, 722, 72229, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANDAUE CITY', 173, 722, 72230, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEDELLIN', 173, 722, 72231, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MINGLANILLA', 173, 722, 72232, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOALBOAL', 173, 722, 72233, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF NAGA', 173, 722, 72234, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OSLOB', 173, 722, 72235, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 722, 72236, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINAMUNGAHAN', 173, 722, 72237, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORO', 173, 722, 72238, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RONDA', 173, 722, 72239, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMBOAN', 173, 722, 72240, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 722, 72241, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 722, 72242, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN REMIGIO', 173, 722, 72243, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 722, 72244, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTANDER', 173, 722, 72245, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBONGA', 173, 722, 72246, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOGOD', 173, 722, 72247, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABOGON', 173, 722, 72248, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABUELAN', 173, 722, 72249, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TALISAY', 173, 722, 72250, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOLEDO CITY', 173, 722, 72251, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBURAN', 173, 722, 72252, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUDELA', 173, 722, 72253, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMLAN (AYUQUITAN)', 173, 746, 74601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AYUNGON', 173, 746, 74602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACONG', 173, 746, 74603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAIS CITY', 173, 746, 74604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASAY', 173, 746, 74605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYAWAN (TULONG)', 173, 746, 74606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINDOY (PAYABON)', 173, 746, 74607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANLAON CITY', 173, 746, 74608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAUIN', 173, 746, 74609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMAGUETE CITY (Capital)', 173, 746, 74610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF GUIHULNGAN', 173, 746, 74611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIMALALUD', 173, 746, 74612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA LIBERTAD', 173, 746, 74613, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINAY', 173, 746, 74614, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANJUYOD', 173, 746, 74615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMPLONA', 173, 746, 74616, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 746, 74617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CATALINA', 173, 746, 74618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIATON', 173, 746, 74619, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBULAN', 173, 746, 74620, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANJAY', 173, 746, 74621, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYASAN', 173, 746, 74622, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALENCIA (LUZURRIAGA)', 173, 746, 74623, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VALLEHERMOSO', 173, 746, 74624, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZAMBOANGUITA', 173, 746, 74625, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ENRIQUE VILLANUEVA', 173, 761, 76101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LARENA', 173, 761, 76102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAZI', 173, 761, 76103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIA', 173, 761, 76104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 761, 76105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIQUIJOR (Capital)', 173, 761, 76106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARTECHE', 173, 826, 82601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALANGIGA', 173, 826, 82602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALANGKAYAN', 173, 826, 82603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BORONGAN (Capital)', 173, 826, 82604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAN-AVID', 173, 826, 82605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 826, 82606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL MACARTHUR', 173, 826, 82607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIPORLOS', 173, 826, 82608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIUAN', 173, 826, 82609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HERNANI', 173, 826, 82610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIPAPAD', 173, 826, 82611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAWAAN', 173, 826, 82612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LLORENTE', 173, 826, 82613, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASLOG', 173, 826, 82614, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYDOLONG', 173, 826, 82615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERCEDES', 173, 826, 82616, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORAS', 173, 826, 82617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUINAPONDAN', 173, 826, 82618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALCEDO', 173, 826, 82619, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JULIAN', 173, 826, 82620, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN POLICARPO', 173, 826, 82621, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULAT', 173, 826, 82622, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAFT', 173, 826, 82623, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ABUYOG', 173, 837, 83701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALANGALANG', 173, 837, 83702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALBUERA', 173, 837, 83703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BABATNGON', 173, 837, 83705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARUGO', 173, 837, 83706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BATO', 173, 837, 83707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYBAY', 173, 837, 83708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURAUEN', 173, 837, 83710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALUBIAN', 173, 837, 83713, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPOOCAN', 173, 837, 83714, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARIGARA', 173, 837, 83715, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGAMI', 173, 837, 83717, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DULAG', 173, 837, 83718, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HILONGOS', 173, 837, 83719, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINDANG', 173, 837, 83720, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INOPACAN', 173, 837, 83721, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISABEL', 173, 837, 83722, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JARO', 173, 837, 83723, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JAVIER (BUGHO)', 173, 837, 83724, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JULITA', 173, 837, 83725, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KANANGA', 173, 837, 83726, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 837, 83728, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEYTE', 173, 837, 83729, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACARTHUR', 173, 837, 83730, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHAPLAG', 173, 837, 83731, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATAG-OB', 173, 837, 83733, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATALOM', 173, 837, 83734, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYORGA', 173, 837, 83735, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MERIDA', 173, 837, 83736, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ORMOC CITY', 173, 837, 83738, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALO', 173, 837, 83739, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALOMPON', 173, 837, 83740, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASTRANA', 173, 837, 83741, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 837, 83742, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 837, 83743, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA FE', 173, 837, 83744, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABANGO', 173, 837, 83745, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABONTABON', 173, 837, 83746, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TACLOBAN CITY (Capital)', 173, 837, 83747, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANAUAN', 173, 837, 83748, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOLOSA', 173, 837, 83749, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUNGA', 173, 837, 83750, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLABA', 173, 837, 83751, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALLEN', 173, 848, 84801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BIRI', 173, 848, 84802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOBON', 173, 848, 84803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAPUL', 173, 848, 84804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATARMAN (Capital)', 173, 848, 84805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATUBIG', 173, 848, 84806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GAMAY', 173, 848, 84807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAOANG', 173, 848, 84808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPINIG', 173, 848, 84809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAS NAVAS', 173, 848, 84810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAVEZARES', 173, 848, 84811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPANAS', 173, 848, 84812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONDRAGON', 173, 848, 84813, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALAPAG', 173, 848, 84814, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAMBUJAN', 173, 848, 84815, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 848, 84816, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ANTONIO', 173, 848, 84817, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 848, 84818, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE', 173, 848, 84819, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ROQUE', 173, 848, 84820, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN VICENTE', 173, 848, 84821, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILVINO LOBOS', 173, 848, 84822, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VICTORIA', 173, 848, 84823, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPE DE VEGA', 173, 848, 84824, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALMAGRO', 173, 860, 86001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASEY', 173, 860, 86002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALBAYOG CITY', 173, 860, 86003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALBIGA', 173, 860, 86004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CATBALOGAN (Capital)', 173, 860, 86005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DARAM', 173, 860, 86006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GANDARA', 173, 860, 86007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINABANGAN', 173, 860, 86008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIABONG', 173, 860, 86009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARABUT', 173, 860, 86010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATUGUINAO', 173, 860, 86011, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOTIONG', 173, 860, 86012, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINABACDAO', 173, 860, 86013, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE DE BUAN', 173, 860, 86014, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN SEBASTIAN', 173, 860, 86015, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARGARITA', 173, 860, 86016, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA RITA', 173, 860, 86017, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO', 173, 860, 86018, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALALORA', 173, 860, 86019, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARANGNAN', 173, 860, 86020, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAREAL', 173, 860, 86021, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANAS (WRIGHT)', 173, 860, 86022, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZUMARRAGA', 173, 860, 86023, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGAPUL-AN', 173, 860, 86024, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JORGE', 173, 860, 86025, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGSANGHAN', 173, 860, 86026, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANAHAWAN', 173, 864, 86401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONTOC', 173, 864, 86402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINUNANGAN', 173, 864, 86403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINUNDAYAN', 173, 864, 86404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBAGON', 173, 864, 86405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOAN', 173, 864, 86406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MAASIN (Capital)', 173, 864, 86407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACROHON', 173, 864, 86408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITBOG', 173, 864, 86409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADRE BURGOS', 173, 864, 86410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINTUYAN', 173, 864, 86411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAINT BERNARD', 173, 864, 86412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 864, 86413, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN (CABALIAN)', 173, 864, 86414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN RICARDO', 173, 864, 86415, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SILAGO', 173, 864, 86416, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOGOD', 173, 864, 86417, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TOMAS OPPUS', 173, 864, 86418, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIMASAWA', 173, 864, 86419, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALMERIA', 173, 878, 87801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BILIRAN', 173, 878, 87802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABUCGAYAN', 173, 878, 87803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAIBIRAN', 173, 878, 87804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CULABA', 173, 878, 87805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAWAYAN', 173, 878, 87806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIPIPI', 173, 878, 87807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAVAL (Capital)', 173, 878, 87808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAPITAN CITY', 173, 972, 97201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPOLOG CITY (Capital)', 173, 972, 97202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KATIPUNAN', 173, 972, 97203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA LIBERTAD', 173, 972, 97204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABASON', 173, 972, 97205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LILOY', 173, 972, 97206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANUKAN', 173, 972, 97207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MUTIA', 173, 972, 97208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIÑAN (NEW PIÑAN)', 173, 972, 97209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLANCO', 173, 972, 97210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRES. MANUEL A. ROXAS', 173, 972, 97211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL', 173, 972, 97212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALUG', 173, 972, 97213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SERGIO OSMEÑA SR.', 173, 972, 97214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIAYAN', 173, 972, 97215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUCO', 173, 972, 97216, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUTAD', 173, 972, 97217, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINDANGAN', 173, 972, 97218, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIOCON', 173, 972, 97219, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIRAWAI', 173, 972, 97220, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPILISAN', 173, 972, 97221, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE DALMAN (PONOT)', 173, 972, 97222, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUTALAC', 173, 972, 97223, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIGUIAN', 173, 972, 97224, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GODOD', 173, 972, 97225, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACUNGAN (Leon T. Postigo)', 173, 972, 97226, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAWIT', 173, 972, 97227, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AURORA', 173, 973, 97302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYOG', 173, 973, 97303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIMATALING', 173, 973, 97305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAS', 173, 973, 97306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMALINAO', 173, 973, 97307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DUMINGAG', 173, 973, 97308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KUMALARANG', 173, 973, 97311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LABANGAN', 173, 973, 97312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAPUYAN', 173, 973, 97313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHAYAG', 173, 973, 97315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARGOSATUBIG', 173, 973, 97317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIDSALIP', 173, 973, 97318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MOLAVE', 173, 973, 97319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGADIAN CITY (Capital)', 173, 973, 97322, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAMON MAGSAYSAY (LIARGO)', 173, 973, 97323, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 973, 97324, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN PABLO', 173, 973, 97325, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABINA', 173, 973, 97327, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMBULIG', 173, 973, 97328, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUKURAN', 173, 973, 97330, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ZAMBOANGA CITY', 173, 973, 97332, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAKEWOOD', 173, 973, 97333, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSEFINA', 173, 973, 97337, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PITOGO', 173, 973, 97338, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOMINOT (DON MARIANO MARCOS)', 173, 973, 97340, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VINCENZO A. SAGUN', 173, 973, 97341, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUIPOS', 173, 973, 97343, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIGBAO', 173, 973, 97344, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALICIA', 173, 983, 98301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUUG', 173, 983, 98302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DIPLAHAN', 173, 983, 98303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMELDA', 173, 983, 98304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IPIL (Capital)', 173, 983, 98305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABASALAN', 173, 983, 98306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABUHAY', 173, 983, 98307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALANGAS', 173, 983, 98308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAGA', 173, 983, 98309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLUTANGA', 173, 983, 98310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAYAO', 173, 983, 98311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSELLER LIM', 173, 983, 98312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIAY', 173, 983, 98313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALUSAN', 173, 983, 98314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TITAY', 173, 983, 98315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUNGAWAN', 173, 983, 98316, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF ISABELA', 173, 997, 99701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUNGON', 173, 1013, 101301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAMULOG', 173, 1013, 101302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANGCAGAN', 173, 1013, 101303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DON CARLOS', 173, 1013, 101304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('IMPASUG-ONG', 173, 1013, 101305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KADINGILAN', 173, 1013, 101306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALILANGAN', 173, 1013, 101307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBAWE', 173, 1013, 101308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KITAOTAO', 173, 1013, 101309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANTAPAN', 173, 1013, 101310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBONA', 173, 1013, 101311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALAYBALAY (Capital)', 173, 1013, 101312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITBOG', 173, 1013, 101313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANOLO FORTICH', 173, 1013, 101314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAMAG', 173, 1013, 101315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGANTUCAN', 173, 1013, 101316, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON', 173, 1013, 101317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FERNANDO', 173, 1013, 101318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUMILAO', 173, 1013, 101319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAKAG', 173, 1013, 101320, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VALENCIA', 173, 1013, 101321, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CABANGLASAN', 173, 1013, 101322, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATARMAN', 173, 1018, 101801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINSILIBAN', 173, 1018, 101802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAHINOG', 173, 1018, 101803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMBAJAO (Capital)', 173, 1018, 101804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGAY', 173, 1018, 101805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACOLOD', 173, 1035, 103501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALOI', 173, 1035, 103502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROY', 173, 1035, 103503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ILIGAN CITY', 173, 1035, 103504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPATAGAN', 173, 1035, 103505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SULTAN NAGA DIMAPORO (KAROMATAN)',
                    173,
                    1035,
                    103506,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAUSWAGAN', 173, 1035, 103507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KOLAMBUGAN', 173, 1035, 103508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LALA', 173, 1035, 103509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINAMON', 173, 1035, 103510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1035, 103511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAIGO', 173, 1035, 103512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATUNGAO', 173, 1035, 103513, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MUNAI', 173, 1035, 103514, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NUNUNGAN', 173, 1035, 103515, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTAO RAGAT', 173, 1035, 103516, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POONA PIAGAPO', 173, 1035, 103517, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALVADOR', 173, 1035, 103518, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPAD', 173, 1035, 103519, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN', 173, 1035, 103520, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGCAL', 173, 1035, 103521, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBOD (Capital)', 173, 1035, 103522, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTAR', 173, 1035, 103523, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALORAN', 173, 1042, 104201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALIANGAO', 173, 1042, 104202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONIFACIO', 173, 1042, 104203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALAMBA', 173, 1042, 104204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLARIN', 173, 1042, 104205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONCEPCION', 173, 1042, 104206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JIMENEZ', 173, 1042, 104207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LOPEZ JAENA', 173, 1042, 104208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OROQUIETA CITY (Capital)', 173, 1042, 104209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OZAMIS CITY', 173, 1042, 104210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANAON', 173, 1042, 104211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLARIDEL', 173, 1042, 104212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPANG DALAGA', 173, 1042, 104213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SINACABAN', 173, 1042, 104214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANGUB CITY', 173, 1042, 104215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUDELA', 173, 1042, 104216, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'DON VICTORIANO CHIONGBIAN  (DON MARIANO MARCOS)',
                    173,
                    1042,
                    104217,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALUBIJID', 173, 1043, 104301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINGASAG', 173, 1043, 104302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINGOAN', 173, 1043, 104303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINUANGAN', 173, 1043, 104304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'CAGAYAN DE ORO CITY (Capital)',
                    173,
                    1043,
                    104305,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVERIA', 173, 1043, 104306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF EL SALVADOR', 173, 1043, 104307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GINGOOG CITY', 173, 1043, 104308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GITAGUM', 173, 1043, 104309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INITAO', 173, 1043, 104310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JASAAN', 173, 1043, 104311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KINOGUITAN', 173, 1043, 104312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGONGLONG', 173, 1043, 104313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGUINDINGAN', 173, 1043, 104314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBERTAD', 173, 1043, 104315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUGAIT', 173, 1043, 104316, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY (LINUGOS)', 173, 1043, 104317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANTICAO', 173, 1043, 104318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MEDINA', 173, 1043, 104319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NAAWAN', 173, 1043, 104320, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OPOL', 173, 1043, 104321, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALAY', 173, 1043, 104322, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUGBONGCOGON', 173, 1043, 104323, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN', 173, 1043, 104324, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALISAYAN', 173, 1043, 104325, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLANUEVA', 173, 1043, 104326, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASUNCION (SAUG)', 173, 1123, 112301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1123, 112303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPALONG', 173, 1123, 112305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW CORELLA', 173, 1123, 112314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PANABO', 173, 1123, 112315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISLAND GARDEN CITY OF SAMAL', 173, 1123, 112317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO TOMAS', 173, 1123, 112318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TAGUM (Capital)', 173, 1123, 112319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAINGOD', 173, 1123, 112322, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BRAULIO E. DUJALI', 173, 1123, 112323, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1123, 112324, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANSALAN', 173, 1124, 112401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAVAO CITY', 173, 1124, 112402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF DIGOS (Capital)', 173, 1124, 112403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HAGONOY', 173, 1124, 112404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBLAWAN', 173, 1124, 112406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGSAYSAY', 173, 1124, 112407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALALAG', 173, 1124, 112408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATANAO', 173, 1124, 112410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PADADA', 173, 1124, 112411, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1124, 112412, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULOP', 173, 1124, 112414, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGANGA', 173, 1125, 112501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAYBANAY', 173, 1125, 112502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOSTON', 173, 1125, 112503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARAGA', 173, 1125, 112504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CATEEL', 173, 1125, 112505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GOVERNOR GENEROSO', 173, 1125, 112506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUPON', 173, 1125, 112507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANAY', 173, 1125, 112508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MATI (Capital)', 173, 1125, 112509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1125, 112510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARRAGONA', 173, 1125, 112511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COMPOSTELA', 173, 1182, 118201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAAK (SAN VICENTE)', 173, 1182, 118202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MABINI (DOÑA ALICIA)', 173, 1182, 118203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MACO', 173, 1182, 118204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAGUSAN (SAN MARIANO)', 173, 1182, 118205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAWAB', 173, 1182, 118206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONKAYO', 173, 1182, 118207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MONTEVISTA', 173, 1182, 118208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NABUNTURAN (Capital)', 173, 1182, 118209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NEW BATAAN', 173, 1182, 118210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANTUKAN', 173, 1182, 118211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DON MARCELINO', 173, 1186, 118601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOSE ABAD SANTOS (TRINIDAD)', 173, 1186, 118602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALITA', 173, 1186, 118603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARIA', 173, 1186, 118604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SARANGANI', 173, 1186, 118605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALAMADA', 173, 1247, 124701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1247, 124702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABACAN', 173, 1247, 124703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KIDAPAWAN (Capital)', 173, 1247, 124704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBUNGAN', 173, 1247, 124705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGPET', 173, 1247, 124706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAKILALA', 173, 1247, 124707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATALAM', 173, 1247, 124708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MIDSAYAP', 173, 1247, 124709, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('M''LANG', 173, 1247, 124710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIGKAWAYAN', 173, 1247, 124711, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIKIT', 173, 1247, 124712, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT ROXAS', 173, 1247, 124713, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TULUNAN', 173, 1247, 124714, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ANTIPAS', 173, 1247, 124715, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANISILAN', 173, 1247, 124716, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEOSAN', 173, 1247, 124717, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ARAKAN', 173, 1247, 124718, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGA', 173, 1263, 126302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'GENERAL SANTOS CITY (DADIANGAS)',
                    173,
                    1263,
                    126303,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF KORONADAL (Capital)', 173, 1263, 126306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORALA', 173, 1263, 126311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POLOMOLOK', 173, 1263, 126312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SURALLAH', 173, 1263, 126313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPAKAN', 173, 1263, 126314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANTANGAN', 173, 1263, 126315, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('T''BOLI', 173, 1263, 126316, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUPI', 173, 1263, 126317, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTO NIÑO', 173, 1263, 126318, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAKE SEBU', 173, 1263, 126319, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGUMBAYAN', 173, 1265, 126501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COLUMBIO', 173, 1265, 126502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 1265, 126503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ISULAN (Capital)', 173, 1265, 126504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALAMANSIG', 173, 1265, 126505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LEBAK', 173, 1265, 126506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUTAYAN', 173, 1265, 126507, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMBAYONG (MARIANO MARCOS)', 173, 1265, 126508, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PALIMBANG', 173, 1265, 126509, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PRESIDENT QUIRINO', 173, 1265, 126510, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TACURONG', 173, 1265, 126511, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SEN. NINOY AQUINO', 173, 1265, 126512, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALABEL (Capital)', 173, 1280, 128001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GLAN', 173, 1280, 128002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIAMBA', 173, 1280, 128003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAASIM', 173, 1280, 128004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAITUM', 173, 1280, 128005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALAPATAN', 173, 1280, 128006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALUNGON', 173, 1280, 128007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('COTABATO CITY', 173, 1298, 129804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TONDO I / II', 173, 1339, 133901, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINONDO', 173, 1339, 133902, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUIAPO', 173, 1339, 133903, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN NICOLAS', 173, 1339, 133904, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA CRUZ', 173, 1339, 133905, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAMPALOC', 173, 1339, 133906, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 1339, 133907, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ERMITA', 173, 1339, 133908, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INTRAMUROS', 173, 1339, 133909, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALATE', 173, 1339, 133910, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PACO', 173, 1339, 133911, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDACAN', 173, 1339, 133912, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PORT AREA', 173, 1339, 133913, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA ANA', 173, 1339, 133914, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MANDALUYONG', 173, 1374, 137401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MARIKINA', 173, 1374, 137402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PASIG', 173, 1374, 137403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('QUEZON CITY', 173, 1374, 137404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF SAN JUAN', 173, 1374, 137405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALOOCAN CITY', 173, 1375, 137501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MALABON', 173, 1375, 137502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF NAVOTAS', 173, 1375, 137503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF VALENZUELA', 173, 1375, 137504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LAS PIÑAS', 173, 1376, 137601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MAKATI', 173, 1376, 137602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF MUNTINLUPA', 173, 1376, 137603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF PARAÑAQUE', 173, 1376, 137604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASAY CITY', 173, 1376, 137605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATEROS', 173, 1376, 137606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGUIG CITY', 173, 1376, 137607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANGUED (Capital)', 173, 1401, 140101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOLINEY', 173, 1401, 140102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUCAY', 173, 1401, 140103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUCLOC', 173, 1401, 140104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAGUIOMAN', 173, 1401, 140105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DANGLAS', 173, 1401, 140106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DOLORES', 173, 1401, 140107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 1401, 140108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LACUB', 173, 1401, 140109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGANGILANG', 173, 1401, 140110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGAYAN', 173, 1401, 140111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANGIDEN', 173, 1401, 140112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LICUAN-BAAY (LICUAN)', 173, 1401, 140113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBA', 173, 1401, 140114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALIBCONG', 173, 1401, 140115, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANABO', 173, 1401, 140116, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PEÑARRUBIA', 173, 1401, 140117, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIDIGAN', 173, 1401, 140118, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 1401, 140119, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SALLAPADAN', 173, 1401, 140120, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1401, 140121, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JUAN', 173, 1401, 140122, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN QUINTIN', 173, 1401, 140123, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAYUM', 173, 1401, 140124, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINEG', 173, 1401, 140125, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBO', 173, 1401, 140126, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VILLAVICIOSA', 173, 1401, 140127, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ATOK', 173, 1411, 141101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAGUIO CITY', 173, 1411, 141102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAKUN', 173, 1411, 141103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BOKOD', 173, 1411, 141104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUGUIAS', 173, 1411, 141105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ITOGON', 173, 1411, 141106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABAYAN', 173, 1411, 141107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPANGAN', 173, 1411, 141108, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIBUNGAN', 173, 1411, 141109, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA TRINIDAD (Capital)', 173, 1411, 141110, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANKAYAN', 173, 1411, 141111, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABLAN', 173, 1411, 141112, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBA', 173, 1411, 141113, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBLAY', 173, 1411, 141114, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BANAUE', 173, 1427, 142701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HUNGDUAN', 173, 1427, 142702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KIANGAN', 173, 1427, 142703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAGAWE (Capital)', 173, 1427, 142704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAMUT', 173, 1427, 142705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAYOYAO', 173, 1427, 142706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALFONSO LISTA (POTIA)', 173, 1427, 142707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AGUINALDO', 173, 1427, 142708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINGYON', 173, 1427, 142709, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINOC', 173, 1427, 142710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ASIPULO', 173, 1427, 142711, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALBALAN', 173, 1432, 143201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUBUAGAN', 173, 1432, 143206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PASIL', 173, 1432, 143208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PINUKPUK', 173, 1432, 143209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RIZAL (LIWAN)', 173, 1432, 143211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TABUK (Capital)', 173, 1432, 143213, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANUDAN', 173, 1432, 143214, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TINGLAYAN', 173, 1432, 143215, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARLIG', 173, 1444, 144401, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAUKO', 173, 1444, 144402, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BESAO', 173, 1444, 144403, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONTOC (Capital)', 173, 1444, 144404, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NATONIN', 173, 1444, 144405, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARACELIS', 173, 1444, 144406, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SABANGAN', 173, 1444, 144407, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SADANGA', 173, 1444, 144408, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGADA', 173, 1444, 144409, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TADIAN', 173, 1444, 144410, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALANASAN (BAYAG)', 173, 1481, 148101, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CONNER', 173, 1481, 148102, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('FLORA', 173, 1481, 148103, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABUGAO (Capital)', 173, 1481, 148104, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUNA', 173, 1481, 148105, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUDTOL', 173, 1481, 148106, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MARCELA', 173, 1481, 148107, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF LAMITAN', 173, 1507, 150702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANTAWAN', 173, 1507, 150703, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALUSO', 173, 1507, 150704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SUMISIP', 173, 1507, 150705, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TIPO-TIPO', 173, 1507, 150706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBURAN', 173, 1507, 150707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AKBAR', 173, 1507, 150708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AL-BARKA', 173, 1507, 150709, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HADJI MOHAMMAD AJUL', 173, 1507, 150710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UNGKAYA PUKAN', 173, 1507, 150711, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HADJI MUHTAMAD', 173, 1507, 150712, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TABUAN-LASA', 173, 1507, 150713, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'BACOLOD-KALAWI (BACOLOD GRANDE)',
                    173,
                    1536,
                    153601,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALABAGAN', 173, 1536, 153602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BALINDONG (WATU)', 173, 1536, 153603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYANG', 173, 1536, 153604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BINIDAYAN', 173, 1536, 153605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUBONG', 173, 1536, 153606, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUTIG', 173, 1536, 153607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GANASSI', 173, 1536, 153609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPAI', 173, 1536, 153610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBA-BAYABAO (MAGUING)', 173, 1536, 153611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBATAN', 173, 1536, 153612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADALUM', 173, 1536, 153613, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADAMBA', 173, 1536, 153614, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALABANG', 173, 1536, 153615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARANTAO', 173, 1536, 153616, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARAWI CITY (Capital)', 173, 1536, 153617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MASIU', 173, 1536, 153618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MULONDO', 173, 1536, 153619, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGAYAWAN (TATARIKAN)', 173, 1536, 153620, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PIAGAPO', 173, 1536, 153621, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('POONA BAYABAO (GATA)', 173, 1536, 153622, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PUALAS', 173, 1536, 153623, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DITSAAN-RAMAIN', 173, 1536, 153624, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAGUIARAN', 173, 1536, 153625, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAMPARAN', 173, 1536, 153626, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TARAKA', 173, 1536, 153627, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBARAN', 173, 1536, 153628, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUGAYA', 173, 1536, 153629, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('WAO', 173, 1536, 153630, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAROGONG', 173, 1536, 153631, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CALANOGAS', 173, 1536, 153632, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUADIPOSO-BUNTONG', 173, 1536, 153633, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGUING', 173, 1536, 153634, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PICONG (SULTAN GUMANDER)', 173, 1536, 153635, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBAYANAGUE', 173, 1536, 153636, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUMBARAN', 173, 1536, 153637, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGOLOAN II', 173, 1536, 153638, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KAPATAGAN', 173, 1536, 153639, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN DUMALONDONG', 173, 1536, 153640, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUMBACA-UNAYAN', 173, 1536, 153641, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('AMPATUAN', 173, 1538, 153801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULDON', 173, 1538, 153802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BULUAN', 173, 1538, 153803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU PAGLAS', 173, 1538, 153805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU PIANG', 173, 1538, 153806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ODIN SINSUAT (DINAIG)', 173, 1538, 153807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SHARIFF AGUAK (MAGANOY) (Capital)',
                    173,
                    1538,
                    153808,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MATANOG', 173, 1538, 153809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGALUNGAN', 173, 1538, 153810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANG', 173, 1538, 153811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN KUDARAT (NULING)', 173, 1538, 153812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'SULTAN SA BARONGIS (LAMBAYONG)',
                    173,
                    1538,
                    153813,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KABUNTALAN (TUMBAO)', 173, 1538, 153814, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('UPI', 173, 1538, 153815, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALAYAN', 173, 1538, 153816, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOUTH UPI', 173, 1538, 153817, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BARIRA', 173, 1538, 153818, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GEN. S. K. PENDATUN', 173, 1538, 153819, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAMASAPANO', 173, 1538, 153820, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALITAY', 173, 1538, 153821, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGAGAWAN', 173, 1538, 153822, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PAGLAT', 173, 1538, 153823, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SULTAN MASTURA', 173, 1538, 153824, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GUINDULUNGAN', 173, 1538, 153825, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU SAUDI-AMPATUAN', 173, 1538, 153826, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU UNSAY', 173, 1538, 153827, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ABDULLAH SANGKI', 173, 1538, 153828, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('RAJAH BUAYAN', 173, 1538, 153829, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU BLAH T. SINSUAT', 173, 1538, 153830, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU ANGGAL MIDTIMBANG', 173, 1538, 153831, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MANGUDADATU', 173, 1538, 153832, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAG', 173, 1538, 153833, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NORTHERN KABUNTALAN', 173, 1538, 153834, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU HOFFER AMPATUAN', 173, 1538, 153835, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DATU SALIBO', 173, 1538, 153836, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SHARIFF SAYDONA MUSTAPHA', 173, 1538, 153837, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('INDANAN', 173, 1566, 156601, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JOLO (Capital)', 173, 1566, 156602, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KALINGALAN CALUANG', 173, 1566, 156603, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUUK', 173, 1566, 156604, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAIMBUNG', 173, 1566, 156605, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'HADJI PANGLIMA TAHIL (MARUNGGAS)',
                    173,
                    1566,
                    156606,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OLD PANAMAO', 173, 1566, 156607, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGUTARAN', 173, 1566, 156608, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PARANG', 173, 1566, 156609, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATA', 173, 1566, 156610, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PATIKUL', 173, 1566, 156611, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIASI', 173, 1566, 156612, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALIPAO', 173, 1566, 156613, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAPUL', 173, 1566, 156614, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TONGKIL', 173, 1566, 156615, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values(
                    'PANGLIMA ESTINO (NEW PANAMAO)',
                    173,
                    1566,
                    156616,
                    1
                );
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LUGUS', 173, 1566, 156617, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANDAMI', 173, 1566, 156618, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('OMAR', 173, 1566, 156619, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PANGLIMA SUGALA (BALIMBING)', 173, 1570, 157001, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BONGAO (Capital)', 173, 1570, 157002, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAPUN (CAGAYAN DE TAWI-TAWI)', 173, 1570, 157003, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIMUNUL', 173, 1570, 157004, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SITANGKAI', 173, 1570, 157005, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOUTH UBIAN', 173, 1570, 157006, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TANDUBAS', 173, 1570, 157007, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TURTLE ISLANDS', 173, 1570, 157008, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANGUYAN', 173, 1570, 157009, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAPA-SAPA', 173, 1570, 157010, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBUTU', 173, 1570, 157011, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUENAVISTA', 173, 1602, 160201, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUTUAN CITY (Capital)', 173, 1602, 160202, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF CABADBARAN', 173, 1602, 160203, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1602, 160204, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('JABONGA', 173, 1602, 160205, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('KITCHARAO', 173, 1602, 160206, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LAS NIEVES', 173, 1602, 160207, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAGALLANES', 173, 1602, 160208, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('NASIPIT', 173, 1602, 160209, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTIAGO', 173, 1602, 160210, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAY', 173, 1602, 160211, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('REMEDIOS T. ROMUALDEZ', 173, 1602, 160212, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BAYUGAN', 173, 1603, 160301, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BUNAWAN', 173, 1603, 160302, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ESPERANZA', 173, 1603, 160303, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LA PAZ', 173, 1603, 160304, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LORETO', 173, 1603, 160305, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PROSPERIDAD (Capital)', 173, 1603, 160306, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ROSARIO', 173, 1603, 160307, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO', 173, 1603, 160308, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN LUIS', 173, 1603, 160309, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA JOSEFA', 173, 1603, 160310, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TALACOGON', 173, 1603, 160311, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TRENTO', 173, 1603, 160312, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('VERUELA', 173, 1603, 160313, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SIBAGAT', 173, 1603, 160314, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('ALEGRIA', 173, 1667, 166701, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BACUAG', 173, 1667, 166702, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BURGOS', 173, 1667, 166704, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CLAVER', 173, 1667, 166706, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DAPA', 173, 1667, 166707, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DEL CARMEN', 173, 1667, 166708, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GENERAL LUNA', 173, 1667, 166710, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('GIGAQUIT', 173, 1667, 166711, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MAINIT', 173, 1667, 166714, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MALIMONO', 173, 1667, 166715, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PILAR', 173, 1667, 166716, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('PLACER', 173, 1667, 166717, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN BENITO', 173, 1667, 166718, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN FRANCISCO (ANAO-AON)', 173, 1667, 166719, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN ISIDRO', 173, 1667, 166720, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SANTA MONICA (SAPAO)', 173, 1667, 166721, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SISON', 173, 1667, 166722, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SOCORRO', 173, 1667, 166723, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SURIGAO CITY (Capital)', 173, 1667, 166724, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGANA-AN', 173, 1667, 166725, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBOD', 173, 1667, 166727, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAROBO', 173, 1668, 166801, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BAYABAS', 173, 1668, 166802, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF BISLIG', 173, 1668, 166803, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGWAIT', 173, 1668, 166804, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CANTILAN', 173, 1668, 166805, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARMEN', 173, 1668, 166806, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CARRASCAL', 173, 1668, 166807, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CORTES', 173, 1668, 166808, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('HINATUAN', 173, 1668, 166809, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LANUZA', 173, 1668, 166810, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIANGA', 173, 1668, 166811, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LINGIG', 173, 1668, 166812, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MADRID', 173, 1668, 166813, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('MARIHATAG', 173, 1668, 166814, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN AGUSTIN', 173, 1668, 166815, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN MIGUEL', 173, 1668, 166816, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGBINA', 173, 1668, 166817, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TAGO', 173, 1668, 166818, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CITY OF TANDAG (Capital)', 173, 1668, 166819, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('BASILISA (RIZAL)', 173, 1685, 168501, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('CAGDIANAO', 173, 1685, 168502, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('DINAGAT', 173, 1685, 168503, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LIBJO (ALBOR)', 173, 1685, 168504, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('LORETO', 173, 1685, 168505, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('SAN JOSE (Capital)', 173, 1685, 168506, 12);
            insert into cities(name, country_pk, province_code, city_code, user_pk)
            values('TUBAJON', 173, 1685, 168507, 12);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            truncate cities;
        `);
    }

}
