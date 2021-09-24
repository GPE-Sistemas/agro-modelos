import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IEstablecimientoDb } from './establecimiento';
export interface IServicioDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fechaInicio: string;
    fechaFin: string;
    observaciones: string;
    animal?: IAnimalDb;
    establecimiento?: IEstablecimientoDb;
}
export declare const SServicio: Schema<IServicioDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=servicio.d.ts.map