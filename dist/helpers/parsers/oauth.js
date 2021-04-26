"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthParserService = void 0;
const admin_1 = require("./admin");
class OauthParserService {
    static token(dato) {
        const dto = {
            accessToken: dato.accessToken,
            accessTokenExpiresAt: dato.accessTokenExpiresAt,
            client: OauthParserService.client(dato.client),
            refreshToken: dato.refreshToken,
            refreshTokenExpiresAt: dato.refreshTokenExpiresAt,
            scope: dato.scope,
            user: admin_1.AdminParserService.usuario(dato.user),
        };
        return dto;
    }
    static tokens(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.token(dato));
        }
        return dto;
    }
    static client(dato) {
        const dto = {
            id: dato.clientId,
            grants: dato.grants,
            redirectUris: dato.redirectUris,
        };
        return dto;
    }
    static clients(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.client(dato));
        }
        return dto;
    }
}
exports.OauthParserService = OauthParserService;
