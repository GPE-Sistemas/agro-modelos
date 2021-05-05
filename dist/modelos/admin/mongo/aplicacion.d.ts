import { Document, Schema, Types } from 'mongoose';
export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}
export declare const SAplicacion: Schema<IAplicacionDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=aplicacion.d.ts.map