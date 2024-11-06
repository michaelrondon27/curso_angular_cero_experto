// Entities
import { User } from "../entities/user.entity";

export class LoginResponse {
    token: string;
    user : User
}
