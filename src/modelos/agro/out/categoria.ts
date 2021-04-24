import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IEspecieDTO, IEspecieDTOValidation } from './especie';

export const ICategoriaDTOValidation = joi.object<ICategoriaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEspecie: joi.string(),
    sexo: joi.boolean(),
    edadMinMeses: joi.number(),
    edadMaxMeses: joi.number(),
    //
    especie: IEspecieDTOValidation
});

export const ICategoriaDTOSchema = j2s(ICategoriaDTOValidation).swagger;

export interface ICategoriaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
    //
    especie?: IEspecieDTO;
}
