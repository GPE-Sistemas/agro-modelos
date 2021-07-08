import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { ITipoVacunaDb } from './tipoVacuna';
export interface IVacunacionDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idTipoVacuna: Types.ObjectId;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDb;
    tipoVacuna?: ITipoVacunaDb;
}
export declare const SVacunacion: Schema<IVacunacionDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=vacunacion.d.ts.map