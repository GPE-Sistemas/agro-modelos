import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDispositivoSilobolsaDTO } from '../../silobolsa/out/dispositivo';
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
    activa: boolean;
    fechaDesmantelacion: string;
    ubicacion: ICoordenadas;
    lanzas?: IDispositivoSilobolsaDTO[];
    trackers?: IDispositivoTrackerSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
}
//# sourceMappingURL=silobolsa.d.ts.map