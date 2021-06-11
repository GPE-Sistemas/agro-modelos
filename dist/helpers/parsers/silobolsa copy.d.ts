import { LeanDocument } from 'mongoose';
import { IDispositivoSilobolsaDb, IDispositivoSilobolsaDTO, IReporteSilobolsaDb, IReporteSilobolsaDTO } from '../../modelos';
export declare class SilobolsaParserService {
    static reporte(dato: LeanDocument<IReporteSilobolsaDb>): IReporteSilobolsaDTO;
    static reportes(datos: LeanDocument<IReporteSilobolsaDb>[]): IReporteSilobolsaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoSilobolsaDb>): IDispositivoSilobolsaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoSilobolsaDb>[]): IDispositivoSilobolsaDTO[];
}
//# sourceMappingURL=silobolsa copy.d.ts.map