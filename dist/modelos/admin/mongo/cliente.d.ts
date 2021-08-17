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
    serviceProfileId: string;
    gatewayIds: string[];
    applicationServer?: IApplicationServerDb;
    aplicaciones?: IAplicacionDb[];
}
export declare const SCliente: Schema<IClienteDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=cliente.d.ts.map