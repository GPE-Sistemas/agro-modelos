import joi from 'joi';
export declare const IApplicationServerValidation: joi.ObjectSchema<IApplicationServer>;
export declare const IApplicationServerSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IApplicationServer {
    nombre: string;
    url: string;
    tipo: 'Chirpstack' | 'Orbiwise' | 'Actility' | 'WMC';
    config: {
        chirpstack?: {
            user: string;
            jwtSecret: string;
        };
        orbiwise?: {
            user: string;
            pass: string;
        };
        wmc?: {
            user: string;
            pass: string;
            jwtSecret: string;
        };
        actility?: {
            AS_ID: string;
            LrcAskey: string;
            Token: string;
        };
    };
}
//# sourceMappingURL=application-server.d.ts.map