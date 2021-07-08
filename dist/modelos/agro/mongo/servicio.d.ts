import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
export interface IServicioDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    fecha: string;
    inicio: boolean;
    observaciones: string;
    animal?: IAnimalDb;
}
export declare const SServicio: Schema<IServicioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=servicio.d.ts.map