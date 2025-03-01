import { Module } from '@nestjs/common';
import { OnboardingsService } from './onboardings.service';
import { OnboardingsController } from './onboardings.controller';
import { Onboarding } from './entities/onboarding.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([Onboarding]),
    ],
    controllers: [OnboardingsController],
    providers: [OnboardingsService]
})
export class OnboardingsModule { }
