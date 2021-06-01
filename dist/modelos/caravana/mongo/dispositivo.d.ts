import { Document, Schema, Types } from 'mongoose';
import { IAcelerometro } from '../acelerometro';
import { IReporteCaravanaDb } from './reporte';
import { IDispositivoDb } from '../../shared/mongo/dispositivo';
export interface IDispositivoCaravanaDb extends Document, IDispositivoDb {
    _id: Types.ObjectId;
    acelerometro: IAcelerometro;
    fechaAsignacion: Date;
    frecuenciaReporte: string;
    idAnimal: string;
    idUltimoReporte: Types.ObjectId;
    ultimoReporte: IReporteCaravanaDb;
}
export declare const SDispositivoCaravana: Schema<IDispositivoCaravanaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=dispositivo.d.ts.map