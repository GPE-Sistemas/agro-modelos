import { Document, Schema, Types } from 'mongoose';
import { IIcono } from '../in/icono';
export interface IEspecieDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
export declare const SEspecie: Schema<IEspecieDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=especie.d.ts.map