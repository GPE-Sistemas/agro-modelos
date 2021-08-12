import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IDiagnosticoDb } from './diagnostico';
import { IEstablecimientoDb } from './establecimiento';
import { ITipoTratamientoDb } from './tipoTratamiento';

export interface ITratamientoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idDiagnostico: Types.ObjectId;
    idTipoTratamiento: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fecha: string;
    producto: string;
    observaciones: string;
    //
    animal?: IAnimalDb;
    diagnostico?: IDiagnosticoDb;
    tipoTratamiento?: ITipoTratamientoDb;
    establecimiento?: IEstablecimientoDb;
}

export const STratamiento = new Schema<ITratamientoDb>({
    idAnimal: { type: Types.ObjectId, required: true, ref: 'animales' },
    idDiagnostico: { type: Types.ObjectId, required: true, ref: 'diagnosticos' },
    idTipoTratamiento: { type: Types.ObjectId, required: true, ref: 'tiposTratamientos' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    fecha: { type: Date, required: true },
    producto: { type: String },
    observaciones: { type: String },
});

STratamiento.virtual('animal', {
    foreignField: '_id',
    justOne: true,
    localField: 'idAnimal',
    ref: 'animales',
});

STratamiento.virtual('diagnostico', {
    foreignField: '_id',
    justOne: true,
    localField: 'idDiagnostico',
    ref: 'diagnosticos',
});

STratamiento.virtual('tipoTratamiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idTipoTratamiento',
    ref: 'tiposTratamientos',
});

STratamiento.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
