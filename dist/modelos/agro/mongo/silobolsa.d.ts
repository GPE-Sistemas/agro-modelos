import { Document, Schema, Types } from 'mongoose';
import { IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';
export interface ISilobolsaDb extends Document {
    _id: Types.ObjectId;
    idEstablecimiento: string;
    idLote: string;
    deveuiLanzas: string[];
    deveuiTrackers: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: Date;
    activa: boolean;
    fechaDesmantelacion: Date;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
    dispositivos?: IDispositivoDb;
}
export declare const SSilobolsa: Schema<ISilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=silobolsa.d.ts.map