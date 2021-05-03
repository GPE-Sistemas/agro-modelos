import { Document, Schema, Types } from 'mongoose';
import { IApplicationServerDb } from './application-server';
import { IClienteDb } from './cliente';
import { ILoteDispositivoDb } from './lote-dispositivo';
export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    idApplicationServer: Types.ObjectId;
    deveui: string;
    deviceName: string;
    descripcion: string;
    tipo: string;
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    deviceProfileId: string;
    applicationServer?: IApplicationServerDb;
    lote?: ILoteDispositivoDb;
    cliente?: IClienteDb;
}
export declare const SDispositivoAdmin: Schema<IDispositivoAdminDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map