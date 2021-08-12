import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';
export interface ISensorNivelDb extends Document {
    activo: boolean;
    deveui: string;
    fechaAsignacion: Date;
    ubicacion: ICoordenadas;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
}
export declare const SSensorNivel: Schema<ISensorNivelDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=sensorNivel.d.ts.map