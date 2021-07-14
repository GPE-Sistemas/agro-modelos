import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAnimalValidation = joi.object<IAnimal>({
    activo: joi.boolean(),
    caravana: joi.string().required(),
    deveui: joi.string(),
    dientes: joi.number(),
    fechaNacimiento: joi.date(),
    fechaAlta: joi.date(),
    foto: joi.string(),
    idBaja: joi.string(),
    idCategoria: joi.string(),
    idEspecie: joi.string().required(),
    idEstablecimiento: joi.string(),
    idGrupo: joi.string(),
    idLote: joi.string(),
    idMadre: joi.string(),
    idPadre: joi.string(),
    idRaza: joi.string(),
    idSubcategoria: joi.string(),
    sexo: joi.boolean(),
});

export const IAnimalSwagger = j2s(IAnimalValidation).swagger;

export interface IAnimal {
    activo?: boolean;
    caravana: string;
    deveui?: string;
    dientes?: number;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: string;
    idCategoria?: string;
    idEspecie?: string;
    idEstablecimiento?: string;
    idGrupo?: string;
    idLote?: string;
    idMadre?: string;
    idPadre?: string;
    idRaza?: string;
    idSubcategoria?: string;
    sexo?: boolean;
}
