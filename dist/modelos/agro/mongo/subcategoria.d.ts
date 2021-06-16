import { Document, Schema, Types } from 'mongoose';
import { ICategoriaDb } from './categoria';
export interface ISubcategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
    categoria?: ICategoriaDb;
}
export declare const SSubcategoria: Schema<ISubcategoriaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=subcategoria.d.ts.map