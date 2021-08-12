import { Document, Schema, Types } from 'mongoose';
import { IReporteSensorNivelDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
import { ICoordenadas } from '../../shared';
export interface IDispositivoSensorNivelDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    idUltimoReporte: Types.ObjectId;
    ubicacion: ICoordenadas;
    firmware: string;
    fechaAsignacion: Date;
    idAsignado: string;
    ultimoReporte?: IReporteSensorNivelDb;
}
export declare const SDispositivoSensorNivel: Schema<IDispositivoSensorNivelDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map