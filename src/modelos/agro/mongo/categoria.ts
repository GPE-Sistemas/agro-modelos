import { Document, Schema, Types } from 'mongoose';
import { IIcono } from '../in/icono';
import { IEspecieDb } from './especie';
import { SIcono } from './icono';

export interface ICategoriaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEspecie: Types.ObjectId;
    sexo?: boolean;
    icono: IIcono,
    iconoFueraCorral: IIcono,
    iconoFueraEstablecimiento: IIcono,
    //
    especie?: IEspecieDb;
}

export const SCategoria = new Schema<ICategoriaDb>({
    nombre: { type: String, required: true },
    idEspecie: { type: Types.ObjectId, required: true, ref: 'especies' },
    sexo: { type: Boolean },
    icono: SIcono,
    iconoFueraCorral: SIcono,
    iconoFueraEstablecimiento: SIcono,
});

SCategoria.index({ nombre: 1, idEspecie: 1 }, { unique: true });

SCategoria.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});
