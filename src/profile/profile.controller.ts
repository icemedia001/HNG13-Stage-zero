import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('me')
export class ProfileController {
    constructor (private readonly profileService: ProfileService) {}

    @Get()
    async getProfile() {
        return this.profileService.getProfile();
    }
}
