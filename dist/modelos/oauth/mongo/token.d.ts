import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
import { IClientDb } from './client';
export interface ITokenDb extends Document {
    _id: Types.ObjectId;
    accessToken: string;
    accessTokenExpiresAt?: Date;
    refreshToken: string;
    refreshTokenExpiresAt?: Date;
    scope?: string | string[];
    client: IClientDb;
    user: IUsuarioDb;
}
export declare const SToken: Schema<ITokenDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=token.d.ts.map