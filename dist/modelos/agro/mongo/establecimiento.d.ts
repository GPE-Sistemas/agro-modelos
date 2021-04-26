import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';
export interface IEstablecimientoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
export declare const SEstablecimiento: Schema<IEstablecimientoDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=establecimiento.d.ts.map