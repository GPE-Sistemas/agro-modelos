import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IIcono, IIconoValidation } from '../in/icono';

export const IPuntoInteresDTOValidation = joi.object<IPuntoInteresDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    coordenadas: ICoordenadasValidation,
    icono: IIconoValidation,
});

export const IPuntoInteresDTOSwagger = j2s(IPuntoInteresDTOValidation).swagger;

export interface IPuntoInteresDTO {
    _id: string;
    nombre: string;
    coordenadas: ICoordenadas;
    icono: IIcono;
}
