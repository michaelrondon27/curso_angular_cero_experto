import { PartialType } from '@nestjs/mapped-types';

// DTOs
import { CreateUserDto } from './create-user.dto';

export class UpdateAuthDto extends PartialType(CreateUserDto) {}
