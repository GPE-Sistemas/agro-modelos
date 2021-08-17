import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';

export const ISensorNivelValidation = joi.object<ISensorNivel>({
    activo: joi.boolean(),
    deveui: joi.string(),
    fechaAsignacion: joi.date(),
    ubicacion: ICoordenadasValidation,
    idEstablecimiento: joi.string(),
    idLote: joi.string(),
    nombre: joi.string(),
    offset: joi.number(),
});

export const ISensorNivelSwagger = j2s(ISensorNivelValidation).swagger;

export interface ISensorNivel {
    activo?: boolean;
    deveui?: string;
    fechaAsignacion?: string;
    ubicacion?: ICoordenadas;
    idEstablecimiento?: string;
    idLote?: string;
    nombre?: string;
    offset?: number;
}
