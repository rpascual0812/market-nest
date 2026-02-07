import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import { join } from "path";

// This loads the variables into process.env
config({ path: join(__dirname, '../../.env') });

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: ['dist/db/migrations/*.js'],
    ssl: {
        rejectUnauthorized: false
    }
};

const dataSource = new DataSource(dataSourceOptions);

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default dataSource;