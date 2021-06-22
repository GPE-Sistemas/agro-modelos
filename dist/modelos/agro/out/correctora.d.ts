import joi from 'joi';
import { IDispositivoCorrectoraDTO } from '../../correctoras';
import { ICoordenadas } from '../../shared';
import { IEstablecimientoDTO } from './establecimiento';
import { ILoteDTO } from './lote';
export declare const ICorrectoraDTOValidation: joi.ObjectSchema<ICorrectoraDTO>;
export declare const ICorrectoraDTOSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICorrectoraDTO {
    _id: string;
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    activa?: boolean;
    ubicacion?: ICoordenadas;
    idEstablecimiento: string;
    idLote: string;
    dispositivo?: IDispositivoCorrectoraDTO;
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
}
//# sourceMappingURL=correctora.d.ts.map