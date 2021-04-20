import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';
import { IAcelerometro } from '../acelerometro';

export const IDispositivoCaravanaValidation = joi.object<IDispositivoCaravana>({
    deveui: joi.string().length(16).required(),
    idAsignado: joi.string().length(16),
    deviceName: joi.string().required(),
});

export interface IDispositivoCaravana extends IDispositivo {
    acelerometro: IAcelerometro;
    fechaAsignacion: string;
    frecuenciaReporte: string;
    idAsignado: string;
    idUltimoReporte: string;
}
