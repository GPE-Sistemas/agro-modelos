import { Document, Schema, Types } from 'mongoose';

export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}

export const SAplicacion = new Schema<IAplicacionDb>({
    nombre: { type: String, required: true, unique: true },
    urlApiAplicacion: { type: String },
    urlApiEntrada: { type: String },
});
