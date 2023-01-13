import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly usersService: UsersService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET,
            ignoreExpiration: false,
        });
    }

    async validate(payload: any) {
        const filter = {
            account: {
                pk: payload.sub
            }
        };

        const user = await this.usersService.find(filter);

        return {
            pk: payload.sub,
            user: payload.name,
            ...user
        }
    }
}