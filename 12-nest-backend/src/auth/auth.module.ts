import { Module } from '@nestjs/common';

// Controllers
import { AuthController } from './auth.controller';

// Servives
import { AuthService } from './auth.service';

@Module({
    controllers: [
        AuthController
    ],
    providers: [
        AuthService
    ],
})
export class AuthModule {}
