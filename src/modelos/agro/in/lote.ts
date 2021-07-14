import joi from 'joi';
import j2s from 'joi-to-swagger';

import { ICoordenadas } from '../..';
import { ICoordenadasValidation } from '../../shared/coordenadas';

export const ILoteValidation = joi.object<ILote>({
    color: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idEstablecimiento: joi.string(),
});

export const ILoteSwagger = j2s(ILoteValidation).swagger;

export interface ILote {
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
}
