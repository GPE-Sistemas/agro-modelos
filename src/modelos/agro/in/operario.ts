import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IPermiso, IPermisoValidation } from './permisos';

export const IOperarioValidation = joi.object<IOperario>({
    idUsuario: joi.string(),
    permisos: IPermisoValidation,
});

export const IOperarioSwagger = j2s(IOperarioValidation).swagger;

export interface IOperario {
    idUsuario?: string;
    permisos?: IPermiso;
}
