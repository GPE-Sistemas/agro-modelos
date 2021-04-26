import { Document, Schema, Types } from 'mongoose';

export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    applicationServerId: Types.ObjectId;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string,
    applications: { applicationId: string, applicationName: string }[];
    gateways: { gatewayId: string, gateway: string }[];
    // deviceProfiles: { deviceProfileId: string, deviceProfile: string }[];
}

export const SCliente = new Schema<IClienteDb>({
    nombre: { type: String, required: true, unique: true },
    applicationServerId: { type: Types.ObjectId, ref: 'applicationServers' },
    networkServerId: { type: String },
    organizationId: { type: String },
    serviceProfileId: { type: String },
    applications: [{ type: Object }],
    gateways: [{ type: Object }],
    // deviceProfiles: [{ type: Object }],
});
