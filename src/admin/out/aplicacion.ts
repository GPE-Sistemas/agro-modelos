import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionDTOValidation = joi.object<IAplicacionDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    urls: joi.object({
        eventos: joi.string(),
        uplinks: joi.string(),
        ack: joi.string(),
        join: joi.string(),
    }).unknown(true)
});

export const IAplicacionDTOSwagger = j2s(IAplicacionDTOValidation).swagger;

export interface IAplicacionDTO {
    _id: string;
    nombre: string;
    urls: {
        eventos: string;
        uplinks: string;
        ack: string;
        join: string;
        [key: string]: string;
    }
}
