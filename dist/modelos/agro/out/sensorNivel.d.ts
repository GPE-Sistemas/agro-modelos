import joi from 'joi';
import { IDispositivoSensorNivelDTO } from '../../sensor-nivel';
import { ICoordenadas } from '../../shared';
import { IEstablecimientoDTO } from './establecimiento';
import { ILoteDTO } from './lote';
export declare const ISensorNivelDTOValidation: joi.ObjectSchema<ISensorNivelDTO>;
export declare const ISensorNivelDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISensorNivelDTO {
    _id: string;
    activo: boolean;
    deveui: string;
    fechaAsignacion: string;
    ubicacion: ICoordenadas;
    idEstablecimiento: string;
    idLote: string;
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
    dispositivo?: IDispositivoSensorNivelDTO;
}
//# sourceMappingURL=sensorNivel.d.ts.map