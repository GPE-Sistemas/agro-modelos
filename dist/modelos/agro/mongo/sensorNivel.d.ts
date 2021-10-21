import { Document, Schema, Types } from 'mongoose';
import { IReporteSensorNivelDTO } from '../..';
import { ICoordenadas, IDispositivoDb } from '../../shared';
import { IEstablecimientoDb } from './establecimiento';
import { ILoteDb } from './lote';
export interface ISensorNivelDb extends Document {
    activo: boolean;
    deveui: string;
    fechaCreacion: Date;
    ubicacion: ICoordenadas;
    idEstablecimiento: Types.ObjectId;
    idLote: Types.ObjectId;
    nombre: string;
    offset: number;
    ultimoReporte: IReporteSensorNivelDTO;
    establecimiento?: IEstablecimientoDb;
    lote?: ILoteDb;
    dispositivo?: IDispositivoDb;
}
export declare const SSensorNivel: Schema<ISensorNivelDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=sensorNivel.d.ts.map