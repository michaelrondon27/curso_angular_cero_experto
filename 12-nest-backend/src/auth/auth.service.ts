import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as bcryptjs from 'bcryptjs';
import { Model } from 'mongoose';

// DTOs
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

// Entities
import { User } from './entities/user.entity';

// Interfaces
import { JwtPayload } from './interfaces/jwt-payload';

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        @InjectModel(User.name) private userModel: Model<User>
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        try {
            const { password, ...userData } = createUserDto;
            const newUser = new this.userModel({
                password: bcryptjs.hashSync(password, 10),
                ...userData
            });

            await newUser.save();
            const { password:_, ...user } = newUser.toJSON();

            return user;
        } catch (error) {
            if (error.code === 11000) {
                throw new BadRequestException(`${ createUserDto.email } already exists!`);
            }

            throw new InternalServerErrorException('Something terrible happen!!!');
        }
    }

    findAll() {
        return `This action returns all auth`;
    }

    findOne(id: number) {
        return `This action returns a #${id} auth`;
    }

    getJwtToken(payload: JwtPayload) {
        const token = this.jwtService.sign(payload);

        return token;
    }

    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new UnauthorizedException('Not valid credentials');
        }

        if (!bcryptjs.compareSync(password, user.password)) {
            throw new UnauthorizedException('Not valid credentials');
        }

        const { password:_, ...rest } = user.toJSON();

        return {
            token: this.getJwtToken({ id: user.id }),
            user: rest
        };
    }

    remove(id: number) {
        return `This action removes a #${id} auth`;
    }

    update(id: number, updateAuthDto: UpdateAuthDto) {
        return `This action updates a #${id} auth`;
    }

}
