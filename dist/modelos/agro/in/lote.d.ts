import joi from 'joi';
import { ICoordenadas } from '../..';
export declare const ILoteValidation: joi.ObjectSchema<ILote>;
export declare const ILoteSwagger: import("joi-to-swagger").SwaggerSchema;
export interface ILote {
    color: string;
    nombre: string;
    coordenadas: ICoordenadas[];
    idEstablecimiento: string;
}
//# sourceMappingURL=lote.d.ts.map