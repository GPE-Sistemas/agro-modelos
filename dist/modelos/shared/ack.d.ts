export interface IAck {
    aplicacion: string;
    idCliente: string;
    deveui: string;
    deviceName: string;
    acknowledged: boolean;
    fCnt: number;
    red: string;
    tags?: {
        [key: string]: string;
    };
}
//# sourceMappingURL=ack.d.ts.map