import joi from 'joi';
export declare const IComandoValidation: joi.ObjectSchema<IComando>;
export declare const IComandoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComando {
    deveui: string;
    payload: string;
    puerto: number;
    ejecutado?: boolean;
    error?: boolean;
    fecha?: string;
    usuario?: {
        _id?: string;
        usuario: string;
    };
    fCnt?: string;
    descripcion?: string;
    aplicacion: string;
}
//# sourceMappingURL=comando.d.ts.map