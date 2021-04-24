import { Document, Schema, Types } from 'mongoose';

export interface IAplicacionDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    urlsApiAplicacion: {
        evento: string;
        uplink: string;
        ack: string;
        join: string;
        [key: string]: string;
    };
    urlsApiEntrada: {
        chirpstack: {
            evento: string;
        }
        orbiwise: {
            uplink: string,
            ack: string,
            join: string,
        },
        [tipoAppServer: string]: Record<string, string>
    };
}

export const SAplicacion = new Schema<IAplicacionDb>({
    nombre: { type: String, required: true, unique: true },
    urlsApiAplicacion: { type: Object },
    urlsApiEntrada: { type: Object },
});
