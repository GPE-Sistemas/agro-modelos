import { Document, Schema, Types } from 'mongoose';
export interface ILogDispositivoDb extends Document {
    _id: Types.ObjectId;
    fecha: Date;
    deveui: string;
    puerto: number;
    payload: string;
    evento: string;
    contenido: string;
}
export declare const SLog: Schema<ILogDispositivoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=log-dispositivo.d.ts.map