import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEventoEspecificoValidation = joi.object<IEventoEspecifico>({
    idAnimal: joi.string(),
    fecha: joi.date(),
    titulo: joi.string(),
    observaciones: joi.string(),
});

export const IEventoEspecificoSwagger = j2s(IEventoEspecificoValidation).swagger;

export interface IEventoEspecifico {
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
}
