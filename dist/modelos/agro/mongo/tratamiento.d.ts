import { Document, Schema, Types } from 'mongoose';
import { IAnimalDb } from './animal';
import { IDiagnosticoDb } from './diagnostico';
import { IEstablecimientoDb } from './establecimiento';
import { ITipoTratamientoDb } from './tipoTratamiento';
export interface ITratamientoDb extends Document {
    _id: Types.ObjectId;
    idAnimal: Types.ObjectId;
    idDiagnostico: Types.ObjectId;
    idTipoTratamiento: Types.ObjectId;
    idEstablecimiento: Types.ObjectId;
    fecha: string;
    producto: string;
    observaciones: string;
    animal?: IAnimalDb;
    diagnostico?: IDiagnosticoDb;
    tipoTratamiento?: ITipoTratamientoDb;
    establecimiento?: IEstablecimientoDb;
}
export declare const STratamiento: Schema<ITratamientoDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=tratamiento.d.ts.map