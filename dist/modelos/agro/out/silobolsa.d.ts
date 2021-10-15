import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDispositivoSilobolsaDTO } from '../../silobolsa/out/dispositivo';
import { IReporteSilobolsaDTO } from '../../silobolsa/out/reporte';
import { IReporteTrackerSilobolsaDTO } from '../../tracker-silobolsa/out/reporte';
import { IDispositivoTrackerSilobolsaDTO } from '../../tracker-silobolsa';
import { IEstablecimientoDTO } from './establecimiento';
import { ILoteDTO } from './lote';
export declare const ISilobolsaDTOValidation: joi.ObjectSchema<ISilobolsaDTO>;
export declare const ISilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISilobolsaDTO {
    _id: string;
    idEstablecimiento: string;
    idLote: string;
    deveuiLanzas: string[];
    deveuiTrackers: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
    humedadConfeccion: number;
    activa: boolean;
    fechaDesmantelacion: string;
    ubicacion: ICoordenadas;
    tas: number;
    lanzas?: IDispositivoSilobolsaDTO[];
    trackers?: IDispositivoTrackerSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
    reporteLanza?: IReporteSilobolsaDTO;
    reportesLanza?: IReporteSilobolsaDTO[];
    reporteTracker?: IReporteTrackerSilobolsaDTO;
    reportesTracker?: IReporteTrackerSilobolsaDTO[];
}
//# sourceMappingURL=silobolsa.d.ts.map