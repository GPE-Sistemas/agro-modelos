import joi from 'joi';
import { IDispositivo } from '../../shared/in/dispositivo';

export const IDispositivoSilobolsaValidation = joi.object<IDispositivoSilobolsa>({
    deveui: joi.string().length(16).required(),
    idSilobolsa: joi.string().length(16),
    deviceName: joi.string().required(),
});

export interface IDispositivoSilobolsa extends IDispositivo {
    alarmaActiva: boolean;
    idUltimoReporte: string;
    fechaAsignacion: string;
    idSilobolsa: string;
    posicion: number;
}
