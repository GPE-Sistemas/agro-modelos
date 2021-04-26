import joi from 'joi';
export declare const IComandoValidation: joi.ObjectSchema<IComando>;
export declare const IComandoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComando {
    deveui: string;
    payload: string;
    puerto: number;
    ejecutado: boolean;
    error: boolean;
    timestamp: string;
    usuario: {
        _id: string;
        email: string;
    };
    fCnt: string;
}
//# sourceMappingURL=comando.d.ts.map