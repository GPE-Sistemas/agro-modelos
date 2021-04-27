import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationServerValidation = joi.object<IApplicationServer>({
    nombre: joi.string().required(),
    url: joi.string().required(),
    tipo: joi.string().required().valid('Chirpstack', 'Orbiwise', 'Actility', 'WMC'),
    config: joi.object(),
});

export const IApplicationServerSwagger = j2s(IApplicationServerValidation).swagger;

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
