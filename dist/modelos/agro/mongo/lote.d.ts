import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
export interface ILoteDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDb;
}
export declare const SLote: Schema<ILoteDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=lote.d.ts.map