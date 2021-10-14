import joi from 'joi';
import { ICoordenadas } from '../../shared';
export declare const ISilobolsaValidation: joi.ObjectSchema<ISilobolsa>;
export declare const ISilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISilobolsa {
    idEstablecimiento?: string;
    idLote?: string;
    deveuiLanzas?: string[];
    deveuiTrackers?: string[];
    numero?: string;
    metros?: number;
    especie?: string;
    cosecha?: string;
    producto?: string;
    fechaConfeccion?: string;
    humedadConfeccion?: number;
    activa?: boolean;
    fechaDesmantelacion?: string;
    ubicacion?: ICoordenadas;
}
//# sourceMappingURL=silobolsa.d.ts.map