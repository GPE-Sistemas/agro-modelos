import { Schema, Types, Document } from 'mongoose';
import { IMetadatos } from '../metadatos';
export interface IDispositivoDb extends Document {
    _id: Types.ObjectId;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: Date;
    metadatos: IMetadatos[];
    red: string;
}
export declare const SDispositivo: Schema<IDispositivoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map