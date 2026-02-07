import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import { join, resolve } from "path";

// Try loading from the current working directory first (common for CLI)
// Then fallback to the relative path from the file
config({ path: resolve(process.cwd(), '.env') });

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST, // This is likely undefined right now, hence 127.0.0.1
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
    migrations: [join(__dirname, '/migrations/*{.ts,.js}')],
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