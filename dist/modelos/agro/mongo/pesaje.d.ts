import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
export interface IPesajeDb extends Document {
    _id: Types.ObjectId;
    idAnimal: string;
    fecha: string;
    peso: number;
    observaciones: string;
    animal?: IAnimalDb;
}
export declare const SPesaje: Schema<IPesajeDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=pesaje.d.ts.map