import { Document, Schema, Types } from 'mongoose';
import { ITipoBajaDb } from './tipoBaja';
export interface IBajaDb extends Document {
    _id: Types.ObjectId;
    fecha: string;
    idTipoBaja: string;
    observaciones: string;
    tipoBaja?: ITipoBajaDb;
}
export declare const SBaja: Schema<IBajaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=baja.d.ts.map