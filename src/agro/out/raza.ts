import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEspecieDTO, IEspecieDTOValidation } from './especie';

export const IRazaDTOValidation = joi.object<IRazaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEspecie: joi.string(),
    //
    especie: IEspecieDTOValidation
});

export const IRazaDTOSchema = j2s(IRazaDTOValidation).swagger;

export interface IRazaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    //
    especie: IEspecieDTO;
}
