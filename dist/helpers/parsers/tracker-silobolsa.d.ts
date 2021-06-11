import { LeanDocument } from 'mongoose';
import { IDispositivoTrackerSilobolsaDb, IDispositivoTrackerSilobolsaDTO, IReporteTrackerSilobolsaDb, IReporteTrackerSilobolsaDTO } from '../../modelos';
export declare class TrackerSilobolsaParserService {
    static reporte(dato: LeanDocument<IReporteTrackerSilobolsaDb>): IReporteTrackerSilobolsaDTO;
    static reportes(datos: LeanDocument<IReporteTrackerSilobolsaDb>[]): IReporteTrackerSilobolsaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoTrackerSilobolsaDb>): IDispositivoTrackerSilobolsaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoTrackerSilobolsaDb>[]): IDispositivoTrackerSilobolsaDTO[];
}
//# sourceMappingURL=tracker-silobolsa.d.ts.map