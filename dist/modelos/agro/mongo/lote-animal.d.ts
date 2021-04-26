import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from './establecimiento';
export interface ILoteAnimalDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDb;
}
export declare const SLoteAnimal: Schema<ILoteAnimalDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=lote-animal.d.ts.map