import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IDiagnosticoValidation = joi.object<IDiagnostico>({
    nombre: joi.string(),
});

export const IDiagnosticoSwagger = j2s(IDiagnosticoValidation).swagger;

export interface IDiagnostico {
    nombre: string;
}
