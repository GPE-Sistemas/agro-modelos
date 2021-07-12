import { Document, Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared';
import { IIcono } from '../in/icono';
import { IBajaDb } from './baja';
export interface IPuntoInteresDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas: ICoordenadas;
    icono: IIcono;
}
export declare const SPuntoInteres: Schema<IBajaDb, import("mongoose").Model<any, any, any>, undefined>;
//# sourceMappingURL=puntoInteres.d.ts.map