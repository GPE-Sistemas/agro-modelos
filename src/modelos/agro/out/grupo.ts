import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEstablecimientoDTO, IEstablecimientoDTOValidation } from './establecimiento';

export const IGrupoDTOValidation = joi.object<IGrupoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEstablecimiento: joi.string(),
    //
    establecimiento: IEstablecimientoDTOValidation,
});

export const IGrupoDTOSwagger = j2s(IGrupoDTOValidation).swagger;
export interface IGrupoDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    //
    establecimiento?: IEstablecimientoDTO;
}
