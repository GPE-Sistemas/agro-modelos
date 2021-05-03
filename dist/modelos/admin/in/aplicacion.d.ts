import joi from 'joi';
export declare const IAplicacionValidation: joi.ObjectSchema<IAplicacion>;
export declare const IAplicacionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacion {
    nombre: string;
    urlsApiAplicacion?: {
        uplink: string;
        ack: string;
        join?: string;
    };
    urlApiEntrada?: string;
}
//# sourceMappingURL=aplicacion.d.ts.map