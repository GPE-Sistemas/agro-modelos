import joi from 'joi';
import { ICoordenadas } from '../../shared/coordenadas';
export declare const IReporteCaravanaDTOValidation: joi.ObjectSchema<IReporteCaravanaDTO>;
export declare const IReporteCaravanaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteCaravanaDTO {
    _id: string;
    deveui: string;
    fecha: string;
    idAnimal?: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}
//# sourceMappingURL=reporte.d.ts.map