import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IIcono, IIconoValidation } from './icono';

export const IEspecieValidation = joi.object<IEspecie>({
    nombre: joi.string(),
    icono: IIconoValidation,
    iconoFueraCorral: IIconoValidation,
    iconoFueraEstablecimiento: IIconoValidation,
});

export const IEspecieSwagger = j2s(IEspecieValidation).swagger;

export interface IEspecie {
    nombre: string;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
