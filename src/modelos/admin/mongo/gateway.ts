import { Document, Schema, Types } from 'mongoose';
import { IApplicationServerDb } from './application-server';

export interface IGatewayDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: string;
    name: string;
    gategayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    //
    applicationServer: IApplicationServerDb;
}

export const SGateway = new Schema<IGatewayDb>({
    idApplicationServer: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    gategayId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    organizationId: { type: String, required: true },
    networkServerId: { type: String, required: true },
});

SGateway.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});
