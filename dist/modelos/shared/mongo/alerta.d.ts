import { Document, Schema, Types } from 'mongoose';
import { IEstablecimientoDb } from '../../agro';
import { IComentarioAlerta, IEstadoAlerta, IReporteAlerta } from '../in/alerta';
export interface IAlertaDb extends Document {
    _id: Types.ObjectId;
    aplicacion: string;
    nivel: number;
    idAsignado: string;
    nombreAsignado: string;
    tipo: 'tecnica' | 'seguridad' | 'reporte';
    fecha: Date;
    estadoActual: string;
    archivada: boolean;
    comentarios: IComentarioAlerta[];
    estados: IEstadoAlerta[];
    reportes: IReporteAlerta[];
    idEstablecimiento: Types.ObjectId;
    establecimiento?: IEstablecimientoDb;
}
export declare const SAlerta: Schema<IAlertaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=alerta.d.ts.map