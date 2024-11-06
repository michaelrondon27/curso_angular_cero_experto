import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

// Controllers
import { AuthController } from './auth.controller';

// Entities
import { User, UserSchema } from './entities/user.entity';

// Servives
import { AuthService } from './auth.service';

@Module({
    controllers: [
        AuthController
    ],
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SEED,
            signOptions: { expiresIn: '6h' }
        }),
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    providers: [
        AuthService
    ],
})
export class AuthModule {}
