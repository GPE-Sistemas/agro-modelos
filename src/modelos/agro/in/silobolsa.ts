import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const ISilobolsaValidation = joi.object<ISilobolsa>({
    idEstablecimiento: joi.string().required(),
    idLote: joi.string().allow(null),
    deveuiLanzas: joi.array().items(joi.string()),
    deveuiTrackers: joi.array().items(joi.string()),
    numero: joi.string().required(),
    metros: joi.number().required(),
    especie: joi.string().required(),
    cosecha: joi.string().required(),
    producto: joi.string().required(),
    fechaConfeccion: joi.date().required(),
    humedadConfeccion: joi.number(),
    activa: joi.boolean(),
    fechaDesmantelacion: joi.date(),
    ubicacion: ICoordenadasValidation,
    tas: joi.number(),
});

export const ISilobolsaSwagger = j2s(ISilobolsaValidation).swagger;

export interface ISilobolsa {
    idEstablecimiento?: string;
    idLote?: string;
    deveuiLanzas?: string[];
    deveuiTrackers?: string[];
    numero?: string;
    metros?: number;
    especie?: string;
    cosecha?: string;
    producto?: string;
    fechaConfeccion?: string;
    humedadConfeccion?: number;
    activa?: boolean;
    fechaDesmantelacion?: string;
    ubicacion?: ICoordenadas;
    tas?: number;
}
