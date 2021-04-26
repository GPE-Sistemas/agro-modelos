import { Document, Schema, Types } from 'mongoose';

export interface IClientDb extends Document {
    _id: Types.ObjectId;
    clientId: string;
    clientSecret: string;
    grants: string[];
    redirectUris: string[]
}

export const SClient = new Schema<IClientDb>({
    clientId: { type: String },
    clientSecret: { type: String },
    grants: [{ type: String }],
    redirectUris: [{ type: String }],
});
