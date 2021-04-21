import joi from 'joi';
import j2s from 'joi-to-swagger';

import { ICoordenadas } from '../../';
import { ICoordenadasValidation } from '../../shared/coordenadas';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const ICorralDTOValidation = joi.object<ICorralDTO>({
    _id: joi.string(),
    color: joi.string(),
    nombre: joi.string(),
    coordenadas: joi.array().items(ICoordenadasValidation),
    idEstablecimiento: joi.string(),
    //
    establecimiento: IEstablecimientoDTOValidation,
});

export const ICorralDTOSwagger = j2s(ICorralDTOValidation).swagger;

export interface ICorralDTO {
    _id: string;
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
