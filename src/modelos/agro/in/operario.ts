import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IUsuario, IUsuarioValidation } from '../../admin';
import { IPermiso, IPermisoValidation } from './permisos';

export const IOperarioValidation = (IUsuarioValidation as joi.ObjectSchema<IOperario>).keys({
    idUsuario: joi.string(),
    permisos: IPermisoValidation,
});

export const IOperarioSwagger = j2s(IOperarioValidation).swagger;

export interface IOperario extends IUsuario {
    idUsuario?: string;
    permisos?: IPermiso;
}
