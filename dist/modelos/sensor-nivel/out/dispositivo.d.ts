import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IReporteSensorNivelDTO } from './reporte';
export declare const IDispositivoSensorNivelDTOValidation: joi.ObjectSchema<IDispositivoSensorNivelDTO>;
export declare const IDispositivoSensorNivelDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoSensorNivelDTO extends IDispositivoDTO {
    idUltimoReporte: string;
    ubicacion: ICoordenadas;
    firmware: string;
    fechaAsignacion: string;
    idAsignado: string;
    ultimoReporte?: IReporteSensorNivelDTO;
}
//# sourceMappingURL=dispositivo.d.ts.map