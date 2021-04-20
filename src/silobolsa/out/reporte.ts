import joi from 'joi';
import { IDispositivoSilobolsaDTO } from './dispositivo';
// import j2s from 'joi-to-swagger';

export const IReporteSilobolsaDTOValidation = joi.object<IReporteSilobolsaDTO>({
    _id: joi.string().required(),
    deveui: joi.string().required(),
    idSilobolsa: joi.string(),
    fecha: joi.date().required(),
    co2: joi.number(),
    temperatura: joi.number(),
    humedad: joi.number(),
    bateria: joi.number(),
    //
    dispositivo: joi.object(),
});

// export const IReporteSilobolsaDTOSchema = j2s(IReporteSilobolsaDTOValidation).swagger;

export interface IReporteSilobolsaDTO {
    _id: string;
    deveui: string;
    idSilobolsa?: string;
    fecha: string;
    co2: number;
    temperatura: number;
    humedad: number;
    bateria: number;
    //
    dispositivo?: IDispositivoSilobolsaDTO;
}
