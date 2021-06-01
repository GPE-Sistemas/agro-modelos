import joi from 'joi';
import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IAcelerometro } from '../acelerometro';
import { IReporteCaravanaDTO } from './reporte';
export declare const IDispositivoCaravanaDTOValidation: joi.ObjectSchema<IDispositivoCaravanaDTO>;
export declare const IDispositivoCaravanaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IDispositivoCaravanaDTO extends IDispositivoDTO {
    acelerometro: IAcelerometro;
    fechaAsignacion: string;
    frecuenciaReporte: string;
    idAnimal: string;
    idUltimoReporte?: string;
    ultimoReporte?: IReporteCaravanaDTO;
    bateria?: number;
    horasReporte?: string[];
}
//# sourceMappingURL=dispositivo.d.ts.map