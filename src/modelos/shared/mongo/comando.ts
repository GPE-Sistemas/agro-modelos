import { Document, Schema, Types } from 'mongoose';

export interface IComandoDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
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
    ejecutado: { type: Boolean },
    error: { type: Boolean },
    fCnt: { type: String },
    payload: { type: String },
    puerto: { type: Number },
    fecha: { type: String },
    usuario: { type: Object },
    descripcion: { type: String },
    aplicacion: { type: String },
});
