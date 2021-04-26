import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';
import { IEstablecimientoDb } from './establecimiento';
export interface ICorralDb extends Document {
    _id: Types.ObjectId;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDb;
}
export declare const SCorral: Schema<ICorralDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=corral.d.ts.map