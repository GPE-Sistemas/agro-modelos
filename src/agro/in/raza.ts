import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IRazaValidation = joi.object<IRaza>({
    nombre: joi.string(),
    idEspecie: joi.string(),
});

export const IRazaSchema = j2s(IRazaValidation).swagger;

export interface IRaza {
    nombre: string;
    idEspecie: string;
}
