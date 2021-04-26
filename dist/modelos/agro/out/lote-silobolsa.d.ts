import joi from 'joi';
import { IEstablecimientoDTO } from './establecimiento';
export declare const ILoteSilobolsaDTOValidation: joi.ObjectSchema<ILoteSilobolsaDTO>;
export declare const ILoteSilobolsaDTOSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILoteSilobolsaDTO {
    _id: string;
    nombre: string;
    idEstablecimiento: string;
    establecimiento?: IEstablecimientoDTO;
}
//# sourceMappingURL=lote-silobolsa.d.ts.map