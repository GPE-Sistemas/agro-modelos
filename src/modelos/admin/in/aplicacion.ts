import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionValidation = joi.object<IAplicacion>({
    nombre: joi.string(),
    urlsApiAplicacion: joi.object({
        uplink: joi.string(),
        ack: joi.string(),
        join: joi.string(),
    }),
    urlApiEntrada: joi.string()
});

export const IAplicacionSwagger = j2s(IAplicacionValidation).swagger;

export interface IAplicacion {
    nombre: string;
    urlsApiAplicacion?: {
        uplink: string;
        ack: string;
        join?: string;
    };
    urlApiEntrada?: string;
}
