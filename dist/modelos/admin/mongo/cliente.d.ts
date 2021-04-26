import { Document, Schema, Types } from 'mongoose';
export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    applicationServerId: string;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    applications: {
        applicationId: string;
        applicationName: string;
    }[];
    gateways: {
        gatewayId: string;
        gateway: string;
    }[];
}
export declare const SCliente: Schema<IClienteDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=cliente.d.ts.map