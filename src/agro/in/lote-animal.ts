import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILoteAnimalValidation = joi.object<ILoteAnimal>({
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
});

export const ILoteAnimalSwagger = j2s(ILoteAnimalValidation).swagger;

export interface ILoteAnimal {
    nombre: string;
    idEstablecimiento: string;
}
