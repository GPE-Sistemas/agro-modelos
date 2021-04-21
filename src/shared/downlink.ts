export interface IDownlink {
    deveui: string;
    puerto: number;
    payload: string;
    usuario: {
        _id?: string,
        email: string,
    };
    fCnt?: string;
    red?: string;
}
