import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoVacunaDTOValidation = joi.object<ITipoVacunaDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const ITipoVacunaDTOSwagger = j2s(ITipoVacunaDTOValidation).swagger;

export interface ITipoVacunaDTO {
    _id: string;
    nombre: string;
}
