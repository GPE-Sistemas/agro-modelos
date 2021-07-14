import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';
import { IEstablecimientoDb } from './establecimiento';
export interface ILoteDb extends Document {
    _id: Types.ObjectId;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: Types.ObjectId;
    establecimiento?: IEstablecimientoDb;
}
export declare const SLote: Schema<ILoteDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=lote.d.ts.map