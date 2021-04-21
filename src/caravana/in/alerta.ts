import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAlertaCaravanaValidation = joi.object<IAlertaCaravana>({
    codigo: joi.number(),
    fecha: joi.date(),
    deveui: joi.string(),
    idAsignado: joi.string(),
});

export const IAlertaCaravanaSwagger = j2s(IAlertaCaravanaValidation).swagger;

export interface IAlertaCaravana {
    codigo: number;
    fecha?: string;
    deveui: string;
    idAsignado?: string;
}
