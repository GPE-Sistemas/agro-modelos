import joi from 'joi';
export declare const IAplicacionDTOValidation: joi.ObjectSchema<IAplicacionDTO>;
export declare const IAplicacionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacionDTO {
    _id: string;
    nombre: string;
    urlApiAplicacion: string;
    urlApiEntrada?: string;
}
//# sourceMappingURL=aplicacion.d.ts.map