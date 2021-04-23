import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ILoteDispositivoValidation = joi.object<ILoteDispositivo>({
    nombre: joi.string(),
});

export const ILoteDispositivoSwagger = j2s(ILoteDispositivoValidation).swagger;

export interface ILoteDispositivo {
    nombre: string;
}
