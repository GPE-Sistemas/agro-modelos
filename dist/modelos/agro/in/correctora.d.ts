import joi from 'joi';
export declare const ICorrectoraValidation: joi.ObjectSchema<ICorrectora>;
export declare const ICorrectoraSchema: import("joi-to-swagger").SwaggerSchema;
export interface ICorrectora {
    numeroSerie?: string;
    deveui?: string;
    modelo?: string;
    fechaAsignacion: string;
    firmware?: string;
    bateria: number;
    idUltimoReporte?: string;
}
//# sourceMappingURL=correctora.d.ts.map