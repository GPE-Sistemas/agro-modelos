import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPesajeValidation = joi.object<IPesaje>({
    idAnimal: joi.string(),
    fecha: joi.date(),
    peso: joi.number(),
    observaciones: joi.string(),
});

export const IPesajeSwagger = j2s(IPesajeValidation).swagger;

export interface IPesaje {
    idAnimal: string;
    fecha: string;
    peso: number;
    observaciones: string;
}
