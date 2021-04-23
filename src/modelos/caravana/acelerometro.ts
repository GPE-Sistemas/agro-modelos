export interface IAcelerometro {
    escala: '00' | '01' | '02' | '03' | string;
    frecuencia: '00' | '01' | '02' | '03' | '04' | string;
    freefallMg: number;
    freefallMs: number;
    wakeMg: number;
    wakeMs: number;
}
