import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared';
import { IIcono, IIconoValidation } from './icono';

export const IPuntoInteresValidation = joi.object<IPuntoInteres>({
    nombre: joi.string(),
    coordenadas: ICoordenadasValidation,
    icono: IIconoValidation,
});

export const IPuntoInteresSwagger = j2s(IPuntoInteresValidation).swagger;

export interface IPuntoInteres {
    nombre?: string;
    coordenadas?: ICoordenadas;
    icono?: IIcono;
}
