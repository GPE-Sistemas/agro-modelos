import { Document, Schema, Types } from 'mongoose';

export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urlsApiAplicacion: {
        eventos: string;
        uplinks: string;
        ack: string;
        join: string;
        [key: string]: string;
    };
    urlsApiEntrada: {
        eventos: string;
        uplinks: string;
        ack: string;
        join: string;
        [key: string]: string;
    };
}

export const SAplicacion = new Schema<IAplicacionDb>({
    nombre: { type: String, required: true, unique: true },
    urlsApiEntrada: { type: Object },
    urlsApiAplicacion: { type: Object },
});
