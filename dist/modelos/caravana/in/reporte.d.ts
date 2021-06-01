import joi from 'joi';
import { ICoordenadas } from '../../shared/coordenadas';
export declare const IReporteCaravanaValidation: joi.ObjectSchema<IReporteCaravana>;
export declare const IReporteCaravanaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IReporteCaravana {
    deveui: string;
    fecha: string;
    idAnimal: string;
    ubicacion: ICoordenadas;
    dentroCorral?: boolean;
    dentroEstablecimiento?: boolean;
}
//# sourceMappingURL=reporte.d.ts.map