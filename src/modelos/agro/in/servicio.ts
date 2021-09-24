import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IServicioValidation = joi.object<IServicio>({
    idAnimal: joi.string(),
    idEstablecimiento: joi.string(),
    fechaInicio: joi.date(),
    fechaFin: joi.date(),
    observaciones: joi.string(),
});

export const IServicioSchema = j2s(IServicioValidation).swagger;

export interface IServicio {
    idAnimal?: string;
    idEstablecimiento?: string;
    fechaInicio?: string;
    fechaFin?: string;
    observaciones?: string;
}
