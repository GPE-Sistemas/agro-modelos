import joi from 'joi';
import { IDispositivoSilobolsaDTO } from '../../silobolsa/out/dispositivo';
import { IEstablecimientoDTO } from './establecimiento';
import { ILoteSilobolsaDTO } from './lote-silobolsa';
export declare const ISilobolsaDTOValidation: joi.ObjectSchema<ISilobolsaDTO>;
export declare const ISilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISilobolsaDTO {
    _id: string;
    idEstablecimiento: string;
    idLote: string;
    deveuiDispositivos: string[];
    numero: string;
    metros: number;
    especie: string;
    cosecha: string;
    producto: string;
    fechaConfeccion: string;
    dispositivos?: IDispositivoSilobolsaDTO[];
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteSilobolsaDTO;
}
//# sourceMappingURL=silobolsa.d.ts.map