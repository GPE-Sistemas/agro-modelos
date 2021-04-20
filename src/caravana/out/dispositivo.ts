import { IDispositivoDTO } from '../../shared/out/dispositivo';
import { IAcelerometro } from '../acelerometro';
import { IReporteCaravanaDTO } from '../out/reporte';

export interface IDispositivoCaravanaDTO extends IDispositivoDTO {
    acelerometro: IAcelerometro;
    fechaAsignacion: string;
    idAsignado: string;
    idUltimoReporte?: string;
    // Populate
    ultimoReporte?: IReporteCaravanaDTO;
    // Calculados
    bateria?: number;
    duracion?: string;
}
