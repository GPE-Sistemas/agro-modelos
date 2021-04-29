import { Document, Schema, Types } from 'mongoose';
export interface IDispositivoAdminDb extends Document {
    _id: Types.ObjectId;
    applicationServerId: Types.ObjectId;
    deviceName: string;
    deveui: string;
    tipo: string;
    idLote: Types.ObjectId;
    idCliente: Types.ObjectId;
    deviceProfileId: string;
}
export declare const SDispositivoAdmin: Schema<IDispositivoAdminDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map