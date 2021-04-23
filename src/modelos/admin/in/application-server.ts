import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationServerValidation = joi.object<IApplicationServer>({
    nombre: joi.string().required(),
    url: joi.string().required(),
    tipo: joi.string().required(),
    config: joi.object(),
});

export const IApplicationServerSwagger = j2s(IApplicationServerValidation).swagger;

export interface IApplicationServer {
    nombre: string;
    url: string;
    tipo: string;
    config: { [key: string]: string };
}

