import { IAcelerometro } from '../acelerometro';
import { IMetadatos } from '../../';
import { IReporteDTO } from '../out/reporte';

export interface IDispositivoDTO {
    _id: string;
    //
    acelerometro: IAcelerometro;
    adr: boolean;
    deveui: string;
    deviceName?: string;
    dr: number;
    fCnt: number;
    fechaAsignacion: string;
    fechaUltimoUplink: string;
    frecuenciaReporte?: string[];
    idAsignado: string;
    idUltimoReporte?: string;
    metadatos: IMetadatos[];
    red: string;
    // Populate
    ultimoReporte?: IReporteDTO;
    // Calculados
    bateria?: number;
    duracion?: string;
}
