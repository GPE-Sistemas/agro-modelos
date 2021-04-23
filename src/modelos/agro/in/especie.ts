import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IEspecieValidation = joi.object<IEspecie>({
    nombre: joi.string(),
});

export const IEspecieSwagger = j2s(IEspecieValidation).swagger;

export interface IEspecie {
    nombre: string;
}
