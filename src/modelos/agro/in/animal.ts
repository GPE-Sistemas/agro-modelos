import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAnimalValidation = joi.object<IAnimal>({
    caravana: joi.string().required(),
    deveuiDispositivo: joi.string(),
    dientes: joi.number(),
    fechaNacimiento: joi.date(),
    fechaAlta: joi.date(),
    foto: joi.string(),
    idBaja: joi.string(),
    idCategoria: joi.string(),
    idCorral: joi.string(),
    idEspecie: joi.string().required(),
    idEstablecimiento: joi.string(),
    idGrupos: joi.array().items(joi.string()),
    idLote: joi.string(),
    idMadre: joi.string(),
    idPadre: joi.string(),
    idRaza: joi.string(),
    idSubcategoria: joi.string(),
    sexo: joi.boolean(),
});

export const IAnimalSwagger = j2s(IAnimalValidation).swagger;

export interface IAnimal {
    caravana: string;
    deveuiDispositivo?: string;
    dientes?: number;
    fechaNacimiento?: string;
    fechaAlta?: string;
    foto?: string;
    idBaja?: string;
    idCategoria?: string;
    idCorral?: string;
    idEspecie: string;
    idEstablecimiento?: string;
    idGrupos?: string[];
    idLote?: string;
    idMadre?: string;
    idPadre?: string;
    idRaza?: string;
    idSubcategoria?: string;
    sexo?: boolean;
}
