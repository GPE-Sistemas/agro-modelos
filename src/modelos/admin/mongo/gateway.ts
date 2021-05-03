import { Document, Schema, Types } from 'mongoose';

export interface IGatewayDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
}

export const SGateway = new Schema<IGatewayDb>({
    idApplicationServer: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    gategayId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    organizationId: { type: String, required: true },
    networkServerId: { type: String, required: true },
});
