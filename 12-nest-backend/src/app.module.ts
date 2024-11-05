import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// Modules
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    imports: [
        AuthModule,
        MongooseModule.forRoot()
    ],
    providers: []
})
export class AppModule {}
