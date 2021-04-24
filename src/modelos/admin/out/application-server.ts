import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationServerDTOValidation = joi.object<IApplicationServerDTO>({
    _id: joi.string(),
    nombre: joi.string().required(),
    url: joi.string().required(),
    tipo: joi.string().required().valid('Chirpstack', 'Orbiwise', 'Actility', 'WMC'),
    config: joi.object(),
});

export const IApplicationServerDTOSwagger = j2s(IApplicationServerDTOValidation).swagger;

export interface IApplicationServerDTO {
    _id: string;
    nombre: string;
    url: string;
    tipo: 'Chirpstack' | 'Orbiwise' | 'Actility' | 'WMC';
    config: { [key: string]: string };
}
