import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IIcono, IIconoValidation } from '../in/icono';
import { IEspecieDTO, IEspecieDTOValidation } from './especie';

export const ICategoriaDTOValidation = joi.object<ICategoriaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    idEspecie: joi.string(),
    sexo: joi.boolean(),
    icono: IIconoValidation,
    iconoFueraCorral: IIconoValidation,
    iconoFueraEstablecimiento: IIconoValidation,
    //
    especie: IEspecieDTOValidation
});

export const ICategoriaDTOSchema = j2s(ICategoriaDTOValidation).swagger;

export interface ICategoriaDTO {
    _id: string;
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
    //
    especie?: IEspecieDTO;
}
