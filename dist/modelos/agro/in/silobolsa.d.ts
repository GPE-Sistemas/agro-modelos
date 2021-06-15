import joi from 'joi';
export declare const ISilobolsaValidation: joi.ObjectSchema<ISilobolsa>;
export declare const ISilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISilobolsa {
    idEstablecimiento: string;
    idLote?: string;
    deveuiLanzas?: string[];
    deveuiTrackers?: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
    activa?: boolean;
    fechaDesmantelacion?: string;
}
//# sourceMappingURL=silobolsa.d.ts.map