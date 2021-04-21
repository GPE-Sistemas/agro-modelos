import joi from 'joi';
import j2s from 'joi-to-swagger';
import { IDispositivoSilobolsaDTO, IDispositivoSilobolsaDTOValidation } from './dispositivo';

export const IAlertaSilobolsaDTOValidation = joi.object<IAlertaSilobolsaDTO>({
    _id: joi.string(),
    codigo: joi.number(),
    nivel: joi.number(),
    valor: joi.number(),
    fecha: joi.date(),
    deveui: joi.string(),
    idSilobolsa: joi.string(),
    archivada: joi.boolean(),
    //
    dispositivo: IDispositivoSilobolsaDTOValidation,
    //
    descripcion: joi.string(),
});

export const IAlertaSilobolsaDTOSwagger = j2s(IAlertaSilobolsaDTOValidation).swagger;

export interface IAlertaSilobolsaDTO {
    _id: string;
    /** Indica el tipo de alerta // 1 - bateria // 2 - co2 // 3 - humedad*/
    codigo: number;
    /** nivel // 1 - leve // 2 - grave */
    nivel: number;
    /** nivel de bateria o valor del sensor de alerta */
    valor?: number; //
    fecha: string;
    deveui?: string;
    idSilobolsa?: string;
    archivada: boolean;
    // Populate
    dispositivo?: IDispositivoSilobolsaDTO;
    //
    descripcion: string;
}
