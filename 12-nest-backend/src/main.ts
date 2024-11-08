import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

// Modules
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    app.useGlobalPipes(new ValidationPipe({
        forbidNonWhitelisted: true,
        whitelist: true
    }));

    await app.listen(3000);
}
bootstrap();
