import { ObjectSchema } from 'joi';
import { IAck, IDownlink, IParsedQuery, IQueryParams, IUplink } from '../modelos';
export declare function validateSchema(dato: any, schema: ObjectSchema): void;
export declare function parseQueryFilters(queryParams?: IQueryParams): IParsedQuery;
export declare function uplinkLabels(uplink: IUplink): {
    aplicacion: string;
    deveui: string;
    idCliente: string;
    payload: string;
    puerto: string;
    tipo: string;
};
export declare function ackLabels(ack: IAck): {
    aplicacion: string;
    ack: string;
    deveui: string;
    fCnt: string;
    idCliente: string;
    tipo: string;
};
export declare function downlinkLabels(downlink: IDownlink): {
    deveui: string;
    payload: string;
    puerto: string;
    red: string | undefined;
    tipo: string;
};
export declare function crearTokenChirpstack(username: string, jwtSecret: string): string;
export declare function httpRequest<T>(url: string, method: string, queryParams?: Record<string, string | number | boolean>, headers?: Record<string, string>, body?: Record<string, any> | string): Promise<{
    body: T;
    headers: any;
}>;
export declare function hashClave(clave: string): Promise<string>;
export declare function compareClave(clave: string, hash: string): Promise<boolean>;
export declare function deveuiValido(deveui: string): boolean;
export declare function getEstadoComando(ejecutado: boolean, error: boolean): "Ejecutado" | "Falló" | "Pendiente";
//# sourceMappingURL=helpers.d.ts.map