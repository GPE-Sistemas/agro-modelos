import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILoteValidation = joi.object<ILote>({
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
});

export const ILoteSwagger = j2s(ILoteValidation).swagger;

export interface ILote {
    nombre: string;
    idEstablecimiento: string;
}
