import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDiagnosticoDTOValidation = joi.object<IDiagnosticoDTO>({
    _id: joi.string(),
    nombre: joi.string(),
});

export const IDiagnosticoDTOSwagger = j2s(IDiagnosticoDTOValidation).swagger;

export interface IDiagnosticoDTO {
    _id: string;
    nombre: string;
}
