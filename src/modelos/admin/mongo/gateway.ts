import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IApplicationServerDb } from './application-server';

export interface IGatewayDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: string;
    name: string;
    gatewayId: string;
    description: string;
    organizationId: string;
    networkServerId: string;
    coordenadas: ICoordenadas;
    gpsDiferencial: boolean;
    //
    applicationServer: IApplicationServerDb;
}

export const SGateway = new Schema<IGatewayDb>({
    idApplicationServer: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    gatewayId: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    organizationId: { type: String, required: true },
    networkServerId: { type: String, required: true },
    coordenadas: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
    gpsDiferencial: { type: Boolean },
});

SGateway.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});
