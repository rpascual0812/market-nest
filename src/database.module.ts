import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from './ormconfig';

// export function DatabaseOrmModule(): DynamicModule {
//     // we could load the configuration from dotEnv here,
//     // but typeORM cli would not be able to find the configuration file.
//
//     return TypeOrmModule.forRoot(ormconfig);
// }

@Module({
    imports: [
        TypeOrmModule.forRoot(config),
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }
