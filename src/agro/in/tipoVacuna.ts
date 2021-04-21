import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoVacunaValidation = joi.object<ITipoVacuna>({
    nombre: joi.string(),
});

export const ITipoVacunaSwagger = j2s(ITipoVacunaValidation).swagger;

export interface ITipoVacuna {
    nombre: string;
}
