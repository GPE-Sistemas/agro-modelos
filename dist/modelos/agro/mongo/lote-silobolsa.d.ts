import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
export interface ILoteSilobolsaDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDb;
}
export declare const SLoteSilobolsa: Schema<ILoteSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=lote-silobolsa.d.ts.map