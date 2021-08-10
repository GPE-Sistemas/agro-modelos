import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IPermisoValidation = joi.object<IPermiso>({
    ['idEstablecimiento']: joi.object({
        globales: joi.object({
            creacion: joi.boolean(),
            eliminacion: joi.boolean(),
            modificacion: joi.boolean(),
            lectura: joi.boolean(),
        }),
        ['entidad']: joi.object({
            creacion: joi.boolean(),
            eliminacion: joi.boolean(),
            modificacion: joi.boolean(),
            lectura: joi.boolean(),
        }),
    }),
});

export const IPermisoSwagger = j2s(IPermisoValidation).swagger;

export interface IPermiso {
    // Un array de ids de establecimientos a los que se quiere dar permisos al usuario
    [idEstablecimiento: string]: {
        // Permisos globales dentro del establecimiento
        globales: {
            creacion: boolean;
            eliminacion: boolean;
            modificacion: boolean;
            lectura: boolean;
        },
        // Sobreescribe los permisos globales para una entidad específica 
        // (ej: animales, silobolsas, eventos, lotes, etc) 
        [entidad: string]: {
            creacion: boolean;
            eliminacion: boolean;
            modificacion: boolean;
            lectura: boolean;
        }
    }
}
