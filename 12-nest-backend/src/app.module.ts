import { Module } from '@nestjs/common';

// Modules
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    imports: [
        AuthModule
    ],
    providers: []
})
export class AppModule {}
