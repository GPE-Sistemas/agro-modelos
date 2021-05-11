import { Document, Schema, Types } from 'mongoose';
import { IReporteCorrectoraDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
export interface IDispositivoCorrectoraDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    firmware: string;
    fechaAsignacion: Date;
    numeroSerieCorrectora: string;
    idUltimoReporte: Types.ObjectId;
    ultimoReporte: IReporteCorrectoraDb;
}
export declare const SDispositivoCorrectora: Schema<IDispositivoCorrectoraDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map