import { Document, Schema, Types } from 'mongoose';
import { IDispositivoCaravanaDb } from './dispositivo';
export interface IAlertaCaravanaDb extends Document {
    _id: Types.ObjectId;
    codigo: number;
    deveui: string;
    fecha: Date;
    idAsignado?: string;
    dispositivo?: IDispositivoCaravanaDb;
}
export declare const SAlertaCaravana: Schema<IAlertaCaravanaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=alerta.d.ts.map