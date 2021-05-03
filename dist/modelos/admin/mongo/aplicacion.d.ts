import { Document, Schema, Types } from 'mongoose';
export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urlsApiAplicacion?: {
        uplink: string;
        ack: string;
        join?: string;
    };
    urlApiEntrada?: string;
}
export declare const SAplicacion: Schema<IAplicacionDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=aplicacion.d.ts.map