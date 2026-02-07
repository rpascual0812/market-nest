import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";
// import { ConfigService } from '@nestjs/config';
// import 'dotenv/config';
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// import * as path from 'path';
// const envPath = path.resolve(__dirname, '../../.env');
// const env: any = dotenv.parse(fs.readFileSync(envPath));
console.log('Database configuration from environment variables:', process.env.DATABASE_HOST, process.env.DATABASE_PORT, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, process.env.DATABASE_NAME);
export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/*.entity.js'],
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