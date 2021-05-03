import { Document, Schema, Types } from 'mongoose';

export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: Types.ObjectId;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string,
    gatewayIds: string[];
}

export const SCliente = new Schema<IClienteDb>({
    nombre: { type: String, required: true, unique: true },
    idApplicationServer: { type: Types.ObjectId, ref: 'applicationServers' },
    networkServerId: { type: String },
    organizationId: { type: String },
    serviceProfileId: { type: String },
    applications: [{ type: Object }],
    gateways: [{ type: Object }],
    admin: { type: Boolean },
    activo: { type: Boolean },
    gatewayIds: [{ type: String }],
});
