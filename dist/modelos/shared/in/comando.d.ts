import joi from 'joi';
export declare const IComandoValidation: joi.ObjectSchema<IComando>;
export declare const IComandoSwagger: import("joi-to-swagger").SwaggerSchema;
export interface IComando {
    deveui: string;
    deviceName?: string;
    idAsignado?: string;
    nombreAsignado?: string;
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
    valor?: string;
    aplicacion: string;
}
//# sourceMappingURL=comando.d.ts.map