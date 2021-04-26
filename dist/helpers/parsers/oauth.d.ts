import { LeanDocument } from 'mongoose';
import { IClientDb, IClientDTO, ITokenDb, ITokenDTO } from '../../modelos';
export declare class OauthParserService {
    static token(dato: LeanDocument<ITokenDb>): ITokenDTO;
    static tokens(datos: LeanDocument<ITokenDb>[]): ITokenDTO[];
    static client(dato: LeanDocument<IClientDb>): IClientDTO;
    static clients(datos: LeanDocument<IClientDb>[]): IClientDTO[];
}
//# sourceMappingURL=oauth.d.ts.map