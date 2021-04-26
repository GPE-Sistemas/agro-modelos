import joi from 'joi';
export declare const IAplicacionValidation: joi.ObjectSchema<IAplicacion>;
export declare const IAplicacionSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacion {
    nombre: string;
    urlsApiAplicacion: {
        evento: string;
        uplink: string;
        ack: string;
        join: string;
        [key: string]: string;
    };
    urlsApiEntrada: {
        chirpstack: {
            evento: string;
        };
        orbiwise: {
            uplink: string;
            ack: string;
            join: string;
        };
        [tipoAppServer: string]: Record<string, string>;
    };
}
//# sourceMappingURL=aplicacion.d.ts.map