import joi from 'joi';
export declare const IAlertaSilobolsaValidation: joi.ObjectSchema<IAlertaSilobolsa>;
export declare const IAlertaSilobolsaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaSilobolsa {
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number;
    fecha: string;
    deveui?: string;
    idSilobolsa?: string;
    archivada?: boolean;
}
//# sourceMappingURL=alerta.d.ts.map