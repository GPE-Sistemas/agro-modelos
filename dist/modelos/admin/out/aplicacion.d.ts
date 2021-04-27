import joi from 'joi';
export declare const IAplicacionDTOValidation: joi.ObjectSchema<IAplicacionDTO>;
export declare const IAplicacionDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAplicacionDTO {
    _id: string;
    nombre: string;
    urlsApiAplicacion?: {
        uplink: string;
        ack: string;
        join?: string;
    };
    urlsApiEntrada?: {
        chirpstack?: {
            evento: string;
        };
        orbiwise?: {
            uplink?: string;
            ack?: string;
            join: string;
        };
    };
}
//# sourceMappingURL=aplicacion.d.ts.map