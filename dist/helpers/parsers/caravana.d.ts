import { LeanDocument } from 'mongoose';
import { IDispositivoCaravanaDb, IDispositivoCaravanaDTO, IReporteCaravanaDb, IReporteCaravanaDTO } from '../../modelos';
export declare class CaravanaParserService {
    static reporte(dato: LeanDocument<IReporteCaravanaDb>): IReporteCaravanaDTO;
    static reportes(datos: LeanDocument<IReporteCaravanaDb>[]): IReporteCaravanaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoCaravanaDb>): IDispositivoCaravanaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoCaravanaDb>[]): IDispositivoCaravanaDTO[];
    static hexaAHoras(hexa: string): string[];
    static getBateria(cantReportesDiarios: number | undefined, mensajesEnviados: number): number | undefined;
    static getDuracion(cantReportesDiarios: number, mensajesEnviados: number): string | undefined;
}
//# sourceMappingURL=caravana.d.ts.map