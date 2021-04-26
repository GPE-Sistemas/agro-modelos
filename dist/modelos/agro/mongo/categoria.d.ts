import { Document, Schema, Types } from 'mongoose';
import { IEspecieDb } from './especie';
export interface ICategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
    especie?: IEspecieDb;
}
export declare const SCategoria: Schema<ICategoriaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=categoria.d.ts.map