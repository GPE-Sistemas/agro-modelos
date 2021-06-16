import { Document, Schema, Types } from 'mongoose';
export interface IClientDb extends Document {
    _id: Types.ObjectId;
    clientId: string;
    clientSecret: string;
    grants: string[];
    redirectUris: string[];
}
export declare const SClient: Schema<IClientDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=client.d.ts.map