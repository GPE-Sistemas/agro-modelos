import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IIconoValidation = joi.object<IIcono>({
    nombre: joi.string(),
    strokeColor: joi.string(),
    fillColor: joi.string(),
});

export const IIconoSwagger = j2s(IIconoValidation).swagger;

export interface IIcono {
    nombre: string;
    strokeColor: string;
    fillColor: string;
}
