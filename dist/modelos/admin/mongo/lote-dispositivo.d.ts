import { Document, Schema, Types } from 'mongoose';
export interface ILoteDispositivoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    key: string;
}
export declare const SLoteDispositivo: Schema<ILoteDispositivoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=lote-dispositivo.d.ts.map