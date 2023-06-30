/// <reference types="mongoose" />
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<import("mongoose").Document>;
    login({ login, password }: AuthDto): Promise<{
        access_token: string;
    }>;
}
