import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from '../../agro';
import { IComentarioAlerta, IEstadoAlerta, IReporteAlerta } from '../in/alerta';

export interface IAlertaDb extends Document {
    _id: Types.ObjectId;
    aplicacion: string;
    nivel: number;
    idAsignado: string;
    nombreAsignado: string;
    tipo: 'tecnica' | 'seguridad' | 'reporte';
    fecha: Date;
    estadoActual: string;
    archivada: boolean;
    comentarios: IComentarioAlerta[];
    estados: IEstadoAlerta[];
    reportes: IReporteAlerta[];
    idEstablecimiento: Types.ObjectId;
    //
    establecimiento?: IEstablecimientoDb;
}

export const SAlerta = new Schema<IAlertaDb>({
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    aplicacion: { type: String },
    nivel: { type: Number },
    idAsignado: { type: String },
    nombreAsignado: { type: String },
    tipo: { type: String },
    fecha: { type: Date },
    estadoActual: { type: String },
    archivada: { type: Boolean },
    comentarios: [{
        fecha: { type: String },
        usuario: { type: String },
        comentario: { type: String },
    }],
    estados: [{
        fecha: { type: String },
        usuario: { type: String },
        estado: { type: String },
    }],
    reportes: [{
        deveui: { type: String },
        deviceName: { type: String },
        fecha: { type: String },
        medicion: { type: String },
        valor: { type: Number },
    }],
});

SAlerta.index({ archivada: 1, fecha: -1 });
SAlerta.index({ archivada: 1, estadoActual: 1, fecha: -1 });
SAlerta.index({ archivada: 1, aplicacion: 1, fecha: -1 });
SAlerta.index({ archivada: 1, idAsignado: 1, tipo: 1 });

SAlerta.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});
