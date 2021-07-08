import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
export interface ILoteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: Types.ObjectId;
    establecimiento?: IEstablecimientoDb;
}
export declare const SLote: Schema<ILoteDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=lote.d.ts.map