import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: AuthDto): Promise<import("./auth.service").IAccessToken>;
}
