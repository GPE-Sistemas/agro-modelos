import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteSilobolsaDb } from './lote-silobolsa';
export interface ISilobolsaDb extends Document {
    _id: Types.ObjectId;
    idEstablecimiento: string;
    idLote: string;
    deveuiDispositivos: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: Date;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteSilobolsaDb;
}
export declare const SSilobolsa: Schema<ISilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=silobolsa.d.ts.map