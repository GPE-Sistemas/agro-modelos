import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
export interface IGrupoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDb;
}
export declare const SGrupo: Schema<IGrupoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=grupo.d.ts.map