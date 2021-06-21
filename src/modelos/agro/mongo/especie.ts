import { Document, Schema, Types } from 'mongoose';
import { IIcono } from '../in/icono';
import { SIcono } from './icono';

export interface IEspecieDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}

export const SEspecie = new Schema<IEspecieDb>({
    nombre: { type: String, required: true, unique: true },
    icono: SIcono,
    iconoFueraCorral: SIcono,
    iconoFueraEstablecimiento: SIcono,
});
