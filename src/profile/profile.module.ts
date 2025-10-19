import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[HttpModule, ConfigModule],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
