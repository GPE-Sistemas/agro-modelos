import { LeanDocument } from 'mongoose';
import { IClientDb, IClientDTO, ITokenDb, ITokenDTO } from '../../modelos';
import { AdminParserService } from './admin';

export class OauthParserService {

    static token(dato: LeanDocument<ITokenDb>): ITokenDTO {
        const dto: ITokenDTO = {
            accessToken: dato.accessToken,
            accessTokenExpiresAt: dato.accessTokenExpiresAt,
            client: OauthParserService.client(dato.client),
            refreshToken: dato.refreshToken,
            refreshTokenExpiresAt: dato.refreshTokenExpiresAt,
            scope: dato.scope,
            user: AdminParserService.usuario(dato.user),
        };
        return dto;
    }
    static tokens(datos: LeanDocument<ITokenDb>[]): ITokenDTO[] {
        const dto: ITokenDTO[] = [];
        for (const dato of datos) {
            dto.push(OauthParserService.token(dato));
        }
        return dto;
    }

    static client(dato: LeanDocument<IClientDb>): IClientDTO {
        const dto: IClientDTO = {
            id: dato.clientId,
            grants: dato.grants,
            redirectUris: dato.redirectUris,
        };
        return dto;
    }
    static clients(datos: LeanDocument<IClientDb>[]): IClientDTO[] {
        const dto: IClientDTO[] = [];
        for (const dato of datos) {
            dto.push(OauthParserService.client(dato));
        }
        return dto;
    }

}
