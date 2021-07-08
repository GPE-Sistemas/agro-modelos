import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { ITipoVacunaDb } from './tipoVacuna';

export interface IVacunacionDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idTipoVacuna: Types.ObjectId;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    //
    animal?: IAnimalDb;
    tipoVacuna?: ITipoVacunaDb;
}
export const SVacunacion = new Schema<IVacunacionDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idTipoVacuna: { type: Types.ObjectId, required: true, ref: 'tiposVacunas' },
    fecha: { type: Date, required: true },
    dosis: { type: String },
    producto: { type: String },
    observaciones: { type: String },
});

SVacunacion.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});

SVacunacion.virtual('tipoVacuna', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoVacuna',
    ref: 'tiposVacunas',
});