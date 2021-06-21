import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IIcono, IIconoValidation } from './icono';

export const ICategoriaValidation = joi.object<ICategoria>({
    nombre: joi.string(),
    idEspecie: joi.string(),
    sexo: joi.boolean(),
    icono: IIconoValidation,
    iconoFueraCorral: IIconoValidation,
    iconoFueraEstablecimiento: IIconoValidation,
});

export const ICategoriaSchema = j2s(ICategoriaValidation).swagger;

export interface ICategoria {
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    icono: IIcono;
    iconoFueraCorral: IIcono;
    iconoFueraEstablecimiento: IIcono;
}
