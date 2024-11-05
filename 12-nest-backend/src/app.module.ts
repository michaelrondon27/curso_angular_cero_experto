import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Modules
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [],
    imports: [
        AuthModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGO_URI)
    ],
    providers: []
})
export class AppModule { }
