import joi from 'joi';
import { ICoordenadas } from '../../shared/coordenadas';
export declare const IReporteCaravanaDTOValidation: joi.ObjectSchema<IReporteCaravanaDTO>;
export declare const IReporteCaravanaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteCaravanaDTO {
    _id: string;
    deveui: string;
    fecha: string;
    idAsignado?: string;
    ubicacion: ICoordenadas;
}
//# sourceMappingURL=reporte.d.ts.map