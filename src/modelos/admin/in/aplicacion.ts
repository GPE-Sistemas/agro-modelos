import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionValidation = joi.object<IAplicacion>({
    nombre: joi.string(),
    urlApiAplicacion: joi.string(),
    urlApiEntrada: joi.string()
});

export const IAplicacionSwagger = j2s(IAplicacionValidation).swagger;

export interface IAplicacion {
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}
