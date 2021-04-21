import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITipoTratamientoValidation = joi.object<ITipoTratamiento>({
    nombre: joi.string(),
});

export const ITipoTratamientoSwagger = j2s(ITipoTratamientoValidation).swagger;

export interface ITipoTratamiento {
    nombre: string;
}
