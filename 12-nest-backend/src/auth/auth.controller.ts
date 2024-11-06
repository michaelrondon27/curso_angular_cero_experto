import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';

// DTOs
import { CreateUserDto, LoginDto, RegisterUserDto, UpdateAuthDto } from './dto';

// Entities
import { User } from './entities/user.entity';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Interfaces
import { LoginResponse } from './interfaces/login-response';

// Services
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UseGuards(AuthGuard)
    @Get('check-token')
    checkToken(@Request() req: Request): LoginResponse {
        const user = req['user'] as User;

        return {
            token: this.authService.getJwtToken({ id: user._id }),
            user
        }
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.authService.create(createUserDto);
    }

    @UseGuards(AuthGuard)
    @Get()
    findAll() {
        return this.authService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.authService.findOne(+id);
    }

    @Post('/login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('/register')
    register(@Body() registerUserDto: RegisterUserDto) {
        return this.authService.register(registerUserDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authService.remove(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
        return this.authService.update(+id, updateAuthDto);
    }

}
