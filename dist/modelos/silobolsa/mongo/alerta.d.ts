import { Document, Schema, Types } from 'mongoose';
import { IDispositivoSilobolsaDb } from './dispositivo';
export interface IAlertaSilobolsaDb extends Document {
    _id: Types.ObjectId;
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number;
    fecha: Date;
    deveui?: string;
    idSilobolsa?: string;
    archivada: boolean;
    dispositivo?: IDispositivoSilobolsaDb;
}
export declare const SAlertaSilobolsa: Schema<IAlertaSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=alerta.d.ts.map