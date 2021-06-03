import { Document, Schema, Types } from 'mongoose';

export interface IComandoDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    deviceName: string;
    idAsignado: string;
    nombreAsignado: string;
    ejecutado: boolean;
    error: boolean;
    fCnt: string;
    payload: string;
    puerto: number;
    fecha: Date;
    usuario: {
        _id?: string,
        usuario: string,
    };
    descripcion: string;
    aplicacion: string;
}

export const SComando = new Schema<IComandoDb>({
    deveui: { type: String, required: true, ref: 'dispositivos' },
    deviceName: { type: String },
    idAsignado: { type: String },
    nombreAsignado: { type: String },
    ejecutado: { type: Boolean },
    error: { type: Boolean },
    fCnt: { type: String },
    payload: { type: String },
    puerto: { type: Number },
    fecha: { type: Date },
    usuario: { type: Object },
    descripcion: { type: String },
    aplicacion: { type: String },
});

SComando.index({ fecha: -1 });
SComando.index({ deveui: 1, fecha: -1 });
SComando.index({ nombreAsignado: 1, fecha: -1 });
SComando.index({ idAsignado: 1, fecha: -1 });
