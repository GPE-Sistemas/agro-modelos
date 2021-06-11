import { Document, Schema, Types } from 'mongoose';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
import { IReporteTrackerSilobolsaDb } from './reporte';
export interface IDispositivoTrackerSilobolsaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    fechaAsignacion: Date;
    idUltimoReporte: Types.ObjectId;
    idSilobolsa: string;
    posicion: number;
    firmware: string;
    sensibilidad: number;
    ultimoReporte?: IReporteTrackerSilobolsaDb;
}
export declare const SDispositivoTrackerSilobolsa: Schema<IDispositivoTrackerSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map