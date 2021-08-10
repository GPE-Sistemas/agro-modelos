import joi from 'joi';
export declare const IPermisoValidation: joi.ObjectSchema<IPermiso>;
export declare const IPermisoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IPermiso {
    [idEstablecimiento: string]: {
        globales: {
            creacion: boolean;
            eliminacion: boolean;
            modificacion: boolean;
            lectura: boolean;
        };
        [entidad: string]: {
            creacion: boolean;
            eliminacion: boolean;
            modificacion: boolean;
            lectura: boolean;
        };
    };
}
//# sourceMappingURL=permisos.d.ts.map