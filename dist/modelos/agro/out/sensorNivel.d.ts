import joi from 'joi';
import { IDispositivoSensorNivelDTO, IReporteSensorNivelDTO } from '../../sensor-nivel';
import { ICoordenadas, IDispositivoDTO } from '../../shared';
import { IEstablecimientoDTO } from './establecimiento';
import { ILoteDTO } from './lote';
export declare const ISensorNivelDTOValidation: joi.ObjectSchema<ISensorNivelDTO>;
export declare const ISensorNivelDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ISensorNivelDTO {
    _id: string;
    activo: boolean;
    deveui: string;
    fechaCreacion: string;
    ubicacion: ICoordenadas;
    idEstablecimiento: string;
    idLote: string;
    nombre: string;
    offset: number;
    ultimoReporte: IReporteSensorNivelDTO;
    establecimiento?: IEstablecimientoDTO;
    lote?: ILoteDTO;
    dispositivo?: IDispositivoDTO;
    dispositivoEspecifico?: IDispositivoSensorNivelDTO;
}
//# sourceMappingURL=sensorNivel.d.ts.map