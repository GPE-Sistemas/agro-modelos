import joi from 'joi';
export declare const IApplicationServerDTOValidation: joi.ObjectSchema<IApplicationServerDTO>;
export declare const IApplicationServerDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IApplicationServerDTO {
    _id: string;
    nombre: string;
    url: string;
    tipo: 'Chirpstack' | 'Orbiwise' | 'Actility' | 'WMC';
    config: {
        [key: string]: string;
    };
}
//# sourceMappingURL=application-server.d.ts.map