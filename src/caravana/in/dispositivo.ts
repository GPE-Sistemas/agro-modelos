import { IAcelerometro } from '../acelerometro';
import { IMetadatos } from '../../';
import joi from 'joi';

export const IDispositivoValidation = joi.object<IDispositivo>({
    // fecha?: string;
    deveui: joi.string().length(16).required(),
    idAsignado: joi.string().length(16),
    deviceName: joi.string().required(),
});

export interface IDispositivo {
    acelerometro: IAcelerometro;
    adr: boolean;
    deveui: string;
    deviceName: string;
    dr: number;
    fCnt: number;
    fechaUltimoUplink: string;
    fechaAsignacion: string;
    frecuenciaReporte: string;
    idAsignado: string;
    idUltimoReporte: string;
    metadatos: IMetadatos[];
    red: string;
}
