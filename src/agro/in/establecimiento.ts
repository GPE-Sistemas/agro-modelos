import joi from 'joi';
import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared/coordenadas';

export const IEstablecimientoValidation = joi.object<IEstablecimiento>().keys({
    nombre: joi.string().required(),
    coordenadas: joi.array().items(joi.array().items(ICoordenadasValidation)),
});

export const IEstablecimientoSwagger = j2s(IEstablecimientoValidation).swagger;

export interface IEstablecimiento {
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
