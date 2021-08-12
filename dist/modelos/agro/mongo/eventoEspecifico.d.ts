import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';
export interface IEventoEspecificoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fecha: string;
    titulo: string;
    observaciones: string;
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}
export declare const SEventoEspecifico: Schema<IEventoEspecificoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=eventoEspecifico.d.ts.map