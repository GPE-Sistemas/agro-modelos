import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IIcono } from '../in/icono';
import { IBajaDb } from './baja';
import { SIcono } from './icono';

export interface IPuntoInteresDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas;
    icono: IIcono;
}

export const SPuntoInteres = new Schema<IBajaDb>({
    nombre: { type: String, required: true, unique: true },
    coordenadas: { type: Object },
    icono: SIcono,
});

SPuntoInteres.index({ nombre: 1 });
