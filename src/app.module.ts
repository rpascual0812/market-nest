import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';
import { EmailsModule } from './emails/emails.module';
import { DocumentsModule } from './documents/documents.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CheckService } from './cron/check/check.service';
import { CronEmailService } from './cron/cron-email/cron-email.service';
import { GarbageCollectorService } from './cron/garbage-collector/garbage-collector.service';
import { TicketsModule } from './tickets/tickets.module';
import { InquiriesModule } from './inquiries/inquiries.module';
import { ValidationModule } from './validation/validation.module';
import { LogsModule } from './logs/logs.module';
import { GenderModule } from './gender/gender.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { MeasurementsModule } from './measurements/measurements.module';
import { CountriesModule } from './countries/countries.module';
import { SlidersModule } from './sliders/sliders.module';
import { ProvincesModule } from './provinces/provinces.module';
import { CitiesModule } from './cities/cities.module';
import { AreasModule } from './areas/areas.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ArticlesModule } from './articles/articles.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { StatusesModule } from './statuses/statuses.module';

@Module({
    imports: [
        AuthModule,
        SessionsModule,
        EmailsModule,
        DocumentsModule,
        ScheduleModule.forRoot(),
        TicketsModule,
        InquiriesModule,
        ValidationModule,
        LogsModule,
        GenderModule,
        ConfigModule.forRoot(),
        ProductsModule,
        MeasurementsModule,
        CountriesModule,
        SlidersModule,
        ProvincesModule,
        CitiesModule,
        AreasModule,
        RolesModule,
        PermissionsModule,
        ArticlesModule,
        NotificationsModule,
        ChatModule,
        OrdersModule,
        StatusesModule,
    ],
    controllers: [AppController],
    providers: [AppService, CheckService, CronEmailService, GarbageCollectorService],
})
export class AppModule { }
