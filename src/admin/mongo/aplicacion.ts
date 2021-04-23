import { Document, Schema, Types } from 'mongoose';

export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urls: {
        eventos: string;
        uplinks: string;
        ack: string;
        join: string;
        [key: string]: string;
    }
}

export const SAplicacion = new Schema<IAplicacionDb>({
    nombre: { type: String, required: true, unique: true },
    urls: { type: Object },
});
