import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuarioDTO, IUsuarioDTOValidation } from '../../admin';
import { IClientDTO, IClientDTOValidation } from './client';

export const ITokenDTOValidation = joi.object<ITokenDTO>({
    accessToken: joi.string(),
    accessTokenExpiresAt: joi.date(),
    refreshToken: joi.string(),
    refreshTokenExpiresAt: joi.date(),
    scope: joi.array().items(joi.string()),
    client: IClientDTOValidation,
    user: IUsuarioDTOValidation,
});

export const ITokenDTOSwagger = j2s(ITokenDTOValidation).swagger;

export interface ITokenDTO {
    accessToken: string;
    accessTokenExpiresAt?: Date;
    refreshToken: string;
    refreshTokenExpiresAt?: Date;
    scope?: string | string[];
    client: IClientDTO;
    user: IUsuarioDTO;
}
