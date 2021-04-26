import { ObjectSchema } from 'joi';
import { IAck, IDownlink, IFiltro, IUplink } from '../modelos';
export declare function validateSchema(dato: any, schema: ObjectSchema): void;
export declare function getFiltroFromQuery(queryParams: any): IFiltro;
export declare function filtroBusqueda(filtro?: IFiltro): any;
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
//# sourceMappingURL=helpers.d.ts.map