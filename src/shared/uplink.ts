import { IMetadatos } from '../';

export interface IUplink {
    deveui: string;
    puerto: number;
    payload: string;
    metadatos: IMetadatos[];
    adr?: boolean;
    dr?: number;
    red: string;
    aplicacion: string;
    idCliente: string;
    fCnt: number;
}
