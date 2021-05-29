import { Document, Schema, Types } from 'mongoose';
import { IReporteSilobolsaDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
export interface IDispositivoSilobolsaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    alarmaActiva: boolean;
    fechaAsignacion: Date;
    idUltimoReporte: Types.ObjectId;
    idSilobolsa: string;
    posicion: number;
    alerta: number;
    ultimoReporte?: IReporteSilobolsaDb;
}
export declare const SDispositivoSilobolsa: Schema<IDispositivoSilobolsaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map