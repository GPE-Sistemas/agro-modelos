import joi from 'joi';
// import j2s from 'joi-to-swagger';
import { ICoordenadas, ICoordenadasValidation } from '../../shared/coordenadas';

export const IEstablecimientoDTOValidation = joi.object<IEstablecimientoDTO>().keys({
    _id: joi.string().required(),
    nombre: joi.string().required(),
    coordenadas: joi.array().items(joi.array().items(ICoordenadasValidation)),
});

export interface IEstablecimientoDTO {
    _id: string;
    nombre: string;
    coordenadas?: ICoordenadas[][];
}
