import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
export interface IEventoEspecificoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
    animal?: IAnimalDb;
}
export declare const SEventoEspecifico: Schema<IEventoEspecificoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=eventoEspecifico.d.ts.map