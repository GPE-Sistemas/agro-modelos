import joi from 'joi';
export declare const IAplicacionValidation: joi.ObjectSchema<IAplicacion>;
export declare const IAplicacionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacion {
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}
//# sourceMappingURL=aplicacion.d.ts.map