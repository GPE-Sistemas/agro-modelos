import joi from 'joi';
import j2s from 'joi-to-swagger';

export const ITratamientoValidation = joi.object<ITratamiento>({
    idAnimal: joi.string(),
    idDiagnostico: joi.string(),
    idTipoTratamiento: joi.string(),
    idEstablecimiento: joi.string(),
    fecha: joi.date(),
    producto: joi.string(),
    observaciones: joi.string(),
});

export const ITratamientoSwagger = j2s(ITratamientoValidation).swagger;

export interface ITratamiento {
    idAnimal?: string;
    idDiagnostico?: string;
    idTipoTratamiento?: string;
    idEstablecimiento?: string;
    fecha?: string;
    producto?: string;
    observaciones?: string;
}
