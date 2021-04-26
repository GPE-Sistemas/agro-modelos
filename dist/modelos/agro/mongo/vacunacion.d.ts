import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { ITipoVacunaDb } from './tipoVacuna';
export interface IVacunacionDb extends Document {
    _id: Types.ObjectId;
    idAnimal: string;
    idTipoVacuna: string;
    fecha: string;
    dosis: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDb;
    tipoVacuna?: ITipoVacunaDb;
}
export declare const SVacunacion: Schema<IVacunacionDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=vacunacion.d.ts.map