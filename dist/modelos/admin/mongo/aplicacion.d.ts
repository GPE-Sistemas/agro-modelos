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
        };
        orbiwise: {
            uplink: string;
            ack: string;
            join: string;
        };
        [tipoAppServer: string]: Record<string, string>;
    };
}
export declare const SAplicacion: Schema<IAplicacionDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=aplicacion.d.ts.map