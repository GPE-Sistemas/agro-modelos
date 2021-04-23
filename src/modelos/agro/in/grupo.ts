import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IGrupoValidation = joi.object<IGrupo>({
    nombre: joi.string(),
    idEstablecimiento: joi.string(),
});

export const IGrupoSwagger = j2s(IGrupoValidation).swagger;
export interface IGrupo {
    nombre: string;
    idEstablecimiento: string;
}
