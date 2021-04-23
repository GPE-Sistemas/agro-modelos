import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ISubcategoriaValidation = joi.object<ISubcategoria>({
    nombre: joi.string(),
    pesoMin: joi.number(),
    pesoMax: joi.number(),
    idCategoria: joi.string(),
});

export const ISubcategoriaSchema = j2s(ISubcategoriaValidation).swagger;

export interface ISubcategoria {
    nombre: string;
    pesoMin?: number;
    pesoMax?: number;
    idCategoria: string;
}
