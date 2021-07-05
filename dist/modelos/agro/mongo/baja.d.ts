import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { ITipoBajaDb } from './tipoBaja';
export interface IBajaDb extends Document {
    _id: Types.ObjectId;
    fecha: string;
    idTipoBaja: Types.ObjectId;
    idAnimal: Types.ObjectId;
    observaciones: string;
    tipoBaja?: ITipoBajaDb;
    animal?: IAnimalDb;
}
export declare const SBaja: Schema<IBajaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=baja.d.ts.map