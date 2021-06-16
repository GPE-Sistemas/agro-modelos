import { Document, Schema, Types } from 'mongoose';
import { IBajaDb } from './baja';
import { ICategoriaDb } from './categoria';
import { ICorralDb } from './corral';
import { IEspecieDb } from './especie';
import { IEstablecimientoDb } from './establecimiento';
import { IGrupoDb } from './grupo';
import { ILoteDb } from './lote';
import { IRazaDb } from './raza';
import { ISubcategoriaDb } from './subcategoria';

export interface IAnimalDb extends Document {
    _id: Types.ObjectId;
    activo: boolean;
    caravana: string;
    deveui?: string;
    dientes: number;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: Types.ObjectId;
    idCategoria?: Types.ObjectId;
    idCorral?: Types.ObjectId;
    idEspecie: Types.ObjectId;
    idEstablecimiento?: Types.ObjectId;
    idGrupos?: Types.ObjectId[];
    idLote?: Types.ObjectId;
    idMadre?: Types.ObjectId;
    idPadre?: Types.ObjectId;
    idRaza?: Types.ObjectId;
    idSubcategoria?: Types.ObjectId;
    sexo?: boolean;
    //
    baja?: IBajaDb;
    categoria?: ICategoriaDb;
    corral?: ICorralDb;
    // dispositivo?: IDispositivoCaravanaDb;
    especie: IEspecieDb;
    establecimiento?: IEstablecimientoDb;
    grupos?: IGrupoDb[];
    lote?: ILoteDb;
    // madre?: IAnimalDb;
    // padre?: IAnimalDb;
    raza?: IRazaDb;
    subcategoria?: ISubcategoriaDb;
}

export const SAnimal = new Schema<IBajaDb>({
    activo: { type: Boolean, required: true },
    caravana: { type: String, required: true, unique: true },
    fechaAlta: { type: Date, required: true },
    deveui: { type: String },
    dientes: { type: Number },
    fechaNacimiento: { type: Date },
    foto: { type: String },
    idBaja: { type: Types.ObjectId, ref: 'bajas' },
    idCategoria: { type: Types.ObjectId, ref: 'categorias' },
    idCorral: { type: Types.ObjectId, ref: 'corrales' },
    idEspecie: { type: Types.ObjectId, ref: 'especies' },
    idEstablecimiento: { type: Types.ObjectId, ref: 'establecimientos' },
    idGrupos: [{ type: Types.ObjectId, ref: 'grupos' }],
    idLote: { type: Types.ObjectId, ref: 'lotes' },
    idMadre: { type: Types.ObjectId, ref: 'animales' },
    idPadre: { type: Types.ObjectId, ref: 'animales' },
    idRaza: { type: Types.ObjectId, ref: 'razas' },
    idSubcategoria: { type: Types.ObjectId, ref: 'subcategorias' },
    sexo: { type: Boolean },
});

SAnimal.index({ caravana: 1 });
SAnimal.index({ deveui: 1 });
SAnimal.index({ activo: 1 });

SAnimal.virtual('baja', {
    foreignField: '_id',
    justOne: true,
    localField: 'idBaja',
    ref: 'bajas',
});

SAnimal.virtual('categoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCategoria',
    ref: 'categorias',
});

SAnimal.virtual('corral', {
    foreignField: '_id',
    justOne: true,
    localField: 'idCorral',
    ref: 'corrales',
});

SAnimal.virtual('lote', {
    foreignField: '_id',
    justOne: true,
    localField: 'idLote',
    ref: 'lotes',
});

SAnimal.virtual('raza', {
    foreignField: '_id',
    justOne: true,
    localField: 'idRaza',
    ref: 'razas',
});

SAnimal.virtual('subcategoria', {
    foreignField: '_id',
    justOne: true,
    localField: 'idSubcategoria',
    ref: 'subcategorias',
});

SAnimal.virtual('especie', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEspecie',
    ref: 'especies',
});

SAnimal.virtual('establecimiento', {
    foreignField: '_id',
    justOne: true,
    localField: 'idEstablecimiento',
    ref: 'establecimientos',
});

SAnimal.virtual('grupos', {
    foreignField: '_id',
    justOne: false,
    localField: 'idGrupos',
    ref: 'grupos',
});

SAnimal.virtual('madre', {
    foreignField: '_id',
    justOne: true,
    localField: 'idMadre',
    ref: 'animales',
});

SAnimal.virtual('padre', {
    foreignField: '_id',
    justOne: true,
    localField: 'idPadre',
    ref: 'animales',
});
