import { IUsuarioDTO } from '../../admin';
import { IClientDTO } from './client';

export interface ITokenDTO {
    accessToken: string;
    accessTokenExpiresAt?: Date;
    refreshToken: string;
    refreshTokenExpiresAt?: Date;
    scope?: string | string[];
    client: IClientDTO;
    user: IUsuarioDTO;
}
