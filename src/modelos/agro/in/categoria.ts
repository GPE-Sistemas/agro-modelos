import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ICategoriaValidation = joi.object<ICategoria>({
    nombre: joi.string(),
    idEspecie: joi.string(),
    sexo: joi.boolean(),
    edadMinMeses: joi.number(),
    edadMaxMeses: joi.number(),
});

export const ICategoriaSchema = j2s(ICategoriaValidation).swagger;

export interface ICategoria {
    nombre: string;
    idEspecie: string;
    sexo?: boolean;
    edadMinMeses?: number;
    edadMaxMeses?: number;
}
