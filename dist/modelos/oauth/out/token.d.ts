import joi from 'joi';
import { IUsuarioDTO } from '../../admin';
import { IClientDTO } from './client';
export declare const ITokenDTOValidation: joi.ObjectSchema<ITokenDTO>;
export declare const ITokenDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ITokenDTO {
    accessToken: string;
    accessTokenExpiresAt?: Date;
    refreshToken: string;
    refreshTokenExpiresAt?: Date;
    scope?: string | string[];
    client: IClientDTO;
    user: IUsuarioDTO;
}
//# sourceMappingURL=token.d.ts.map