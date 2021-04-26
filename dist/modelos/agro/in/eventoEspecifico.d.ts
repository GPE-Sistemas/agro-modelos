import joi from 'joi';
export declare const IEventoEspecificoValidation: joi.ObjectSchema<IEventoEspecifico>;
export declare const IEventoEspecificoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IEventoEspecifico {
    idAnimal: string;
    fecha: string;
    titulo: string;
    observaciones: string;
}
//# sourceMappingURL=eventoEspecifico.d.ts.map