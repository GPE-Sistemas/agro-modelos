import { Schema, Types, Document } from 'mongoose';
import { IMetadatos } from '../metadatos';
import { IComandoDb } from './comando';
export interface IDispositivoDb extends Document {
    _id: Types.ObjectId;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: string;
    fechaUltimoUplink: Date;
    metadatos: IMetadatos[];
    red: string;
    tipo?: string;
    idUltimoComando: Types.ObjectId;
    ultimoComando: IComandoDb;
}
export declare const SDispositivo: Schema<IDispositivoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map