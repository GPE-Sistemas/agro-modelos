import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionValidation = joi.object<IAplicacion>({
    nombre: joi.string(),
    urls: joi.object({
        eventos: joi.string(),
        uplinks: joi.string(),
        ack: joi.string(),
        join: joi.string(),
    }).unknown(true)
});

export const IAplicacionSwagger = j2s(IAplicacionValidation).swagger;

export interface IAplicacion {
    nombre: string;
    urls: {
        eventos: string;
        uplinks: string;
        ack: string;
        join: string;
        [key: string]: string;
    }
}
