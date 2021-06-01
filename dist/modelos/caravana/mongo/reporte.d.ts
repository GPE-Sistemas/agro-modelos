import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../';
export interface IReporteCaravanaDb extends Document {
    _id: Types.ObjectId;
    deveui: string;
    fecha: Date;
    idAnimal?: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}
export declare const SReporteCaravana: Schema<IReporteCaravanaDb, import("mongoose").Model<any, any>, undefined>;
//# sourceMappingURL=reporte.d.ts.map