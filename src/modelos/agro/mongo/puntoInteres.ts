import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IIcono } from '../in/icono';
import { IBajaDb } from './baja';
import { IEstablecimientoDb } from './establecimiento';
import { SIcono } from './icono';

export interface IPuntoInteresDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: Types.ObjectId;
    coordenadas: ICoordenadas;
    icono: IIcono;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SPuntoInteres = new Schema<IBajaDb>({
    nombre: { type: String, required: true },
    idEstablecimiento: { type: Types.ObjectId },
    coordenadas: { type: Object },
    icono: SIcono,
});

SPuntoInteres.index({ nombre: 1, idEstablecimiento: 1 }, { unique: true });

SPuntoInteres.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});