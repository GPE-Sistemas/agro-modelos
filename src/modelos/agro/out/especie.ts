import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IIcono, IIconoValidation } from '../in/icono';

export const IEspecieDTOValidation = joi.object<IEspecieDTO>({
    _id: joi.string(),
    nombre: joi.string(),
    icono: IIconoValidation,
    iconoFueraCorral: IIconoValidation,
    iconoFueraEstablecimiento: IIconoValidation,
});

export const IEspecieDTOSwagger = j2s(IEspecieDTOValidation).swagger;

export interface IEspecieDTO {
    _id: string;
    nombre: string;
    icono: IIcono,
    iconoFueraCorral: IIcono,
    iconoFueraEstablecimiento: IIcono,
}
