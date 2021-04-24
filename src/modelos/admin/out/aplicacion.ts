import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAplicacionDTOValidation = joi.object<IAplicacionDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    urlsApiAplicacion: joi.object({
        evento: joi.string(),
        uplink: joi.string(),
        ack: joi.string(),
        join: joi.string(),
    }).unknown(true),
    urlsApiEntrada: joi.object({
        chirpstack: joi.object({
            evento: joi.string(),
        }),
        orbiwise: joi.object({
            uplink: joi.string(),
            ack: joi.string(),
            join: joi.string(),
        }),
    }).unknown(true)
});

export const IAplicacionDTOSwagger = j2s(IAplicacionDTOValidation).swagger;

export interface IAplicacionDTO {
    _id: string;
    nombre: string;
    urlsApiAplicacion: {
        evento: string;
        uplink: string;
        ack: string;
        join: string;
        [key: string]: string;
    };
    urlsApiEntrada: {
        chirpstack: {
            evento: string;
        }
        orbiwise: {
            uplink: string,
            ack: string,
            join: string,
        },
        [tipoAppServer: string]: Record<string, string>
    };
}
