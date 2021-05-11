import { LeanDocument } from 'mongoose';
import { IComandoDb, IComandoDTO, IDispositivoSilobolsaDb, IDispositivoSilobolsaDTO, IReporteSilobolsaDb, IReporteSilobolsaDTO } from '../../modelos';
export declare class SilobolsaParserService {
    static reporte(dato: LeanDocument<IReporteSilobolsaDb>): IReporteSilobolsaDTO;
    static reportes(datos: LeanDocument<IReporteSilobolsaDb>[]): IReporteSilobolsaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoSilobolsaDb>): IDispositivoSilobolsaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoSilobolsaDb>[]): IDispositivoSilobolsaDTO[];
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO;
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[];
    static getNombreComando(puerto: number): string;
}
//# sourceMappingURL=silobolsa.d.ts.map