import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import { join, resolve } from "path";

config({ path: resolve(process.cwd(), '.env') });

console.log('Connecting to host:', process.env.DATABASE_HOST);
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST, // This is likely undefined right now, hence 127.0.0.1
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    ssl: {
        rejectUnauthorized: false
    }
};

const dataSource = new DataSource(dataSourceOptions as DataSourceOptions);

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default dataSource;