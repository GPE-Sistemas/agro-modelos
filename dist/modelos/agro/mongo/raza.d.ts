import { Document, Schema, Types } from 'mongoose';
import { IEspecieDb } from './especie';
export interface IRazaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    especie?: IEspecieDb;
}
export declare const SRaza: Schema<IRazaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=raza.d.ts.map