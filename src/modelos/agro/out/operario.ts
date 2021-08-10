import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IPermiso, IPermisoValidation } from '../in/permisos';

export const IOperarioDTOValidation = joi.object<IOperarioDTO>({
    _id: joi.string(),
    idUsuario: joi.string(),
    permisos: IPermisoValidation,
});

export const IOperarioDTOSwagger = j2s(IOperarioDTOValidation).swagger;

export interface IOperarioDTO {
    _id: string;
    idUsuario: string;
    permisos: IPermiso;
}
