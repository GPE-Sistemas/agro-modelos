export interface IComandoDTO {
    _id: string;
    deveui: string;
    payload: string;
    puerto: number;
    ejecutado: boolean;
    error: boolean;
    timestamp: string;
    usuario: any;
    fCnt: string;
    //
    estado: string;
    comando: string;
}
