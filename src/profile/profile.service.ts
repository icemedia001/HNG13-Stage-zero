import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, timestamp } from 'rxjs';

@Injectable()
export class ProfileService {
    constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {}

    private readonly logger = new Logger(ProfileService.name);

    async getProfile() {
        let catFact = 'Cat fact not availabe at the moment.';
        try {
            const response = await firstValueFrom(this.httpService.get('https://catfact.ninja/fact'));
            catFact = response.data?.fact || catFact;
        } catch (error) {
            this.logger.warn('Failed to fetch cat fact;' + error.message)
        }

        return {
            status: 'success',
            user: {
                email: this.configService.get<string>('MY_EMAIL'),
                name: this.configService.get<string>('MY_NAME'),
                stack: this.configService.get<string>('MY_STACK'),
        },
        timestamp: new Date().toISOString(),
        fact: catFact,
    }
}
}
