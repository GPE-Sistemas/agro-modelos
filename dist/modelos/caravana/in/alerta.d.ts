import joi from 'joi';
export declare const IAlertaCaravanaValidation: joi.ObjectSchema<IAlertaCaravana>;
export declare const IAlertaCaravanaSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IAlertaCaravana {
    codigo: number;
    fecha?: string;
    deveui: string;
    idAsignado?: string;
}
//# sourceMappingURL=alerta.d.ts.map