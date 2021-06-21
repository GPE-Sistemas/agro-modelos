import { Document, Schema, Types } from 'mongoose';
import { IIcono } from '../in/icono';
import { IEspecieDb } from './especie';
export interface ICategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    sexo?: boolean;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
    especie?: IEspecieDb;
}
export declare const SCategoria: Schema<ICategoriaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=categoria.d.ts.map