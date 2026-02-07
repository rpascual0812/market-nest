import { Module } from '@nestjs/common';
import { OnboardingsService } from './onboardings.service';
import { OnboardingsController } from './onboardings.controller';
import { Onboarding } from './entities/onboarding.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnboardingDocument } from './entities/onboarding-document.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Onboarding, OnboardingDocument]),
    ],
    controllers: [OnboardingsController],
    providers: [OnboardingsService]
})
export class OnboardingsModule { }
