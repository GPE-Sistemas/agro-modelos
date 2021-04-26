import joi from 'joi';
export declare const IAplicacionDTOValidation: joi.ObjectSchema<IAplicacionDTO>;
export declare const IAplicacionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacionDTO {
    _id: string;
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