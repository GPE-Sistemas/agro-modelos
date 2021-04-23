import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISilobolsaValidation = joi.object<ISilobolsa>({
    idEstablecimiento: joi.string().required(),
    idLote: joi.string().required(),
    deveuiDispositivos: joi.array().items(joi.string()),
    numero: joi.string().required(),
    metros: joi.number().required(),
    especie: joi.string().required(),
    cosecha: joi.string().required(),
    producto: joi.string().required(),
    fechaConfeccion: joi.date().required(),
});

export const ISilobolsaSwagger = j2s(ISilobolsaValidation).swagger;

export interface ISilobolsa {
    idEstablecimiento: string;
    idLote: string;
    deveuiDispositivos: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
}
