import joi from 'joi';
import j2s from 'joi-to-swagger';

import { ICoordenadas } from '../../';
import { ICoordenadasValidation } from '../../shared/coordenadas';

export const ICorralValidation = joi.object<ICorral>({
    color: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idEstablecimiento: joi.string(),
});

export const ICorralSwagger = j2s(ICorralValidation).swagger;

export interface ICorral {
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
}
