export interface IAck {
    aplicacion: string;
    idCliente: string;
    deveui: string;
    acknowledged: boolean;
    fCnt: number;
    tags: any;
}
