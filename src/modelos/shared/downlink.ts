export interface IDownlink {
    deveui: string;
    puerto: number;
    payload: string;
    usuario?: {
        _id?: string,
        usuario: string,
    };
    fCnt?: string;
    red?: string;
}
