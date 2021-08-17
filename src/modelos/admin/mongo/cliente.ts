import { Document, Schema, Types } from 'mongoose';
import { IAplicacionDb } from './aplicacion';
import { IApplicationServerDb } from './application-server';

export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: Types.ObjectId;
    idAplicaciones: Types.ObjectId[];
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string,
    gatewayIds: string[];
    //
    applicationServer?: IApplicationServerDb;
    aplicaciones?: IAplicacionDb[];
}

export const SCliente = new Schema<IClienteDb>({
    nombre: { type: String, required: true, unique: true },
    idApplicationServer: { type: Types.ObjectId, ref: 'applicationServers' },
    idAplicaciones: [{ type: Types.ObjectId, ref: 'aplicaciones' }],
    networkServerId: { type: String },
    organizationId: { type: String },
    serviceProfileId: { type: String },
    applications: [{ type: Object }],
    gateways: [{ type: Object }],
    admin: { type: Boolean },
    activo: { type: Boolean },
    gatewayIds: [{ type: String }],
});

SCliente.virtual('applicationServer', {
    foreignField: '_id',
    justOne: true,
    localField: 'idApplicationServer',
    ref: 'applicationServers',
});

SCliente.virtual('aplicaciones', {
    foreignField: '_id',
    justOne: false,
    localField: 'idAplicaciones',
    ref: 'aplicaciones',
});