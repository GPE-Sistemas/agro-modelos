import { Document,  Schema, Types } from 'mongoose';
import { ICoordenadas } from '../../shared/coordenadas';

export interface IEstablecimientoDb extends Document {
    _id: Types.ObjectId;
    nombre: string;
    coordenadas?: ICoordenadas[][];
}

export const SEstablecimiento = new Schema<IEstablecimientoDb>({
    nombre: { type: String, required: true, unique: true },
    coordenadas: [{ type: Object }],
});
