import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IApplicationServerDTOValidation = joi.object<IApplicationServerDTO>({
    _id: joi.string(),
    nombre: joi.string().required(),
    url: joi.string().required(),
    tipo: joi.string().required().valid('Chirpstack', 'Orbiwise', 'Actility', 'WMC'),
    config: joi.object({
        chirpstack: joi.object({
            user: joi.string(),
            jwtSecret: joi.string(),
        }),
        orbiwise: joi.object({
            user: joi.string(),
            pass: joi.string(),
        }),
        wmc: joi.object({
            user: joi.string(),
            pass: joi.string(),
            jwtSecret: joi.string(),
        }),
        actility: joi.object({
            AS_ID: joi.string(),
            LrcAskey: joi.string(),
            Token: joi.string(),
        }),
    }),
});

export const IApplicationServerDTOSwagger = j2s(IApplicationServerDTOValidation).swagger;

export interface IApplicationServerDTO {
    _id: string;
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
