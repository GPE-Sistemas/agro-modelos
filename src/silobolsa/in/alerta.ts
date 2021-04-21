import joi from 'joi';
import j2s from 'joi-to-swagger';

export const IAlertaSilobolsaValidation = joi.object<IAlertaSilobolsa>({
    codigo: joi.number(),
    nivel: joi.number(),
    valor: joi.number(),
    fecha: joi.date(),
    deveui: joi.string(),
    idSilobolsa: joi.string(),
    archivada: joi.boolean(),
});

export const IAlertaSilobolsaSwagger = j2s(IAlertaSilobolsaValidation).swagger;

export interface IAlertaSilobolsa {
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number; // 
    fecha: string;
    deveui?: string;
    idSilobolsa?: string;
    archivada?: boolean;
}
