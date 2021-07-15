import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IIcono } from '../in/icono';
import { IBajaDb } from './baja';
import { IEstablecimientoDb } from './establecimiento';
export interface IPuntoInteresDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    idEstablecimiento: Types.ObjectId;
    coordenadas: ICoordenadas;
    icono: IIcono;
    establecimiento?: IEstablecimientoDb;
}
export declare const SPuntoInteres: Schema<IBajaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=puntoInteres.d.ts.map