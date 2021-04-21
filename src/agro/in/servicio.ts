import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IServicioValidation = joi.object<IServicio>({
    idAnimal: joi.string(),
    fecha: joi.date(),
    inicio: joi.boolean(),
    observaciones: joi.string(),
});

export const IServicioSchema = j2s(IServicioValidation).swagger;

export interface IServicio {
    idAnimal: string;
    fecha: string;
    inicio: boolean;
    observaciones: string;
}
