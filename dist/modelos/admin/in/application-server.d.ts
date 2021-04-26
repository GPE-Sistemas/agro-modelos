import joi from 'joi';
export declare const IApplicationServerValidation: joi.ObjectSchema<IApplicationServer>;
export declare const IApplicationServerSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IApplicationServer {
    nombre: string;
    url: string;
    tipo: 'Chirpstack' | 'Orbiwise' | 'Actility' | 'WMC';
    config: {
        [key: string]: string;
    };
}
//# sourceMappingURL=application-server.d.ts.map