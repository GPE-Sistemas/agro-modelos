import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IVacunacionValidation = joi.object<IVacunacion>({
    idAnimal: joi.string(),
    idTipoVacuna: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    producto: joi.string(),
    dosis: joi.string(),
    observaciones: joi.string(),
});

export const IVacunacionSwagger = j2s(IVacunacionValidation).swagger;

export interface IVacunacion {
    idAnimal?: string;
    idTipoVacuna?: string;
    idEstablecimiento?: string;
    fecha?: string;
    dosis?: string;
    producto?: string;
    observaciones?: string;
}
