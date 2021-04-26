import { Document, Schema, Types } from 'mongoose';
import { IUsuarioDb } from '../../admin';
import { IClientDb } from './client';

export interface ITokenDb extends Document {
    _id: Types.ObjectId;
    accessToken: string;
    accessTokenExpiresAt?: Date;
    refreshToken?: string;
    refreshTokenExpiresAt?: Date;
    scope?: string | string[];
    client: IClientDb;
    user: IUsuarioDb;
}

export const SToken = new Schema<ITokenDb>({
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    client: { type: Object },
    user: { type: Object },
});

SToken.index({ 'refreshTokenExpiresAt': 1 }, { expireAfterSeconds: 0 });
