import { Document, Schema, Types } from 'mongoose';
import { IDispositivoSilobolsaDb } from './dispositivo';

export interface IAlertaSilobolsaDb extends Document {
    _id: Types.ObjectId;
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number; // 
    fecha: Date;
    deveui?: string;
    idSilobolsa?: string;
    archivada: boolean;
    // Populate
    dispositivo?: IDispositivoSilobolsaDb;
}

export const SAlertaSilobolsa = new Schema<IAlertaSilobolsaDb>({
    codigo: { type: Number, required: true },
    nivel: { type: Number },
    valor: { type: Number },
    fecha: { type: Date, required: true },
    deveui: { type: String, required: true },
    idSilobolsa: { type: Types.ObjectId },
    archivada: { type: Boolean, required: true, default: false },
});

SAlertaSilobolsa.virtual('dispositivo', {
    foreignField: 'deveui',
    justOne: true,
    localField: 'deveui',
    ref: 'dispositivos',
});
