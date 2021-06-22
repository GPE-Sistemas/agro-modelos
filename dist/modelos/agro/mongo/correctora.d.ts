import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';
export interface ICorrectoraDb extends Document {
    numeroSerie?: string;
    deveui: string;
    modelo: string;
    fechaAsignacion: Date;
    firmware: string;
    bateria: number;
    activa: boolean;
    ubicacion: ICoordenadas;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
}
export declare const SCorrectora: Schema<ICorrectoraDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=correctora.d.ts.map