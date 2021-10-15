import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas, IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';
export interface ISilobolsaDb extends Document {
    _id: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    deveuiLanzas: string[];
    deveuiTrackers: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: Date;
    humedadConfeccion: number;
    activa: boolean;
    fechaDesmantelacion: Date;
    ubicacion: ICoordenadas;
    tas: number;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
    dispositivos?: IDispositivoDb;
}
export declare const SSilobolsa: Schema<ISilobolsaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=silobolsa.d.ts.map