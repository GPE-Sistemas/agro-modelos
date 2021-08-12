import joi from 'joi';
import { ICoordenadas } from '../../shared';
import { IDispositivo } from '../../shared/in/dispositivo';
export declare const IDispositivoSensorNivelValidation: joi.ObjectSchema<IDispositivoSensorNivel>;
export declare const IDispositivoSensorNivelSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoSensorNivel extends IDispositivo {
    idUltimoReporte?: string;
    ubicacion?: ICoordenadas;
    firmware?: string;
    fechaAsignacion?: string;
    idAsignado?: string;
}
//# sourceMappingURL=dispositivo.d.ts.map