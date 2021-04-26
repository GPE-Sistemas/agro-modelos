import { IMetadatos } from '../';
export interface IUplink {
    aplicacion: string;
    idCliente: string;
    red: string;
    deveui: string;
    puerto: number;
    payload: string;
    metadatos: IMetadatos[];
    adr?: boolean;
    dr?: number;
    fCnt: number;
    tags?: {
        [key: string]: string;
    };
}
//# sourceMappingURL=uplink.d.ts.map