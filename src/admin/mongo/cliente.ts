import { Document, Schema, Types } from 'mongoose';

export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    applicationServerId: string;
    networkServerId: string;
    organizationId: string;
    applications: { applicationId: string, applicationName: string }[];
    deviceProfiles: { deviceProfileId: string, deviceProfile: string }[];
    gateways: { gatewayId: string, gateway: string }[];
}

export const SCliente = new Schema<IClienteDb>({
    nombre: { type: String, required: true, unique: true },
    applicationServerId: { type: String },
    networkServerId: { type: String },
    organizationId: { type: String },
    applications: [{ type: Object }],
    deviceProfiles: [{ type: Object }],
    gateways: [{ type: Object }],
});
