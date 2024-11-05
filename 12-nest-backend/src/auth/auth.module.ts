import { Module } from '@nestjs/common';
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
