import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionDTOValidation = joi.object<IAplicacionDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    urlApiAplicacion: joi.string(),
    urlApiEntrada: joi.object(),
});

export const IAplicacionDTOSwagger = j2s(IAplicacionDTOValidation).swagger;

export interface IAplicacionDTO {
    _id: string;
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}
