import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILoteSilobolsaValidation = joi.object<ILoteSilobolsa>().keys({
    nombre: joi.string().required(),
    idEstablecimiento: joi.string().required(),
});

export const ILoteSilobolsaSwagger = j2s(ILoteSilobolsaValidation).swagger;

export interface ILoteSilobolsa {
    nombre: string;
    idEstablecimiento: string;
}
