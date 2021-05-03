import { Document, Schema, Types } from 'mongoose';
import { IApplicationServerDb } from './application-server';
export interface IClienteDb extends Document {
    _id: Types.ObjectId;
    admin: boolean;
    activo: boolean;
    nombre: string;
    idApplicationServer: Types.ObjectId;
    networkServerId: string;
    organizationId: string;
    serviceProfileId: string;
    gatewayIds: string[];
    applicationServer?: IApplicationServerDb;
}
export declare const SCliente: Schema<IClienteDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=cliente.d.ts.map