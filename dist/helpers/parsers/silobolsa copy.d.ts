import { LeanDocument } from 'mongoose';
import { IComandoDb, IComandoDTO, IDispositivoSilobolsaDb, IDispositivoSilobolsaDTO, ILogDispositivoDb, ILogDispositivoDTO, IReporteSilobolsaDb, IReporteSilobolsaDTO } from '../../modelos';
export declare class SilobolsaParserService {
    static reporte(dato: LeanDocument<IReporteSilobolsaDb>): IReporteSilobolsaDTO;
    static reportes(datos: LeanDocument<IReporteSilobolsaDb>[]): IReporteSilobolsaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoSilobolsaDb>): IDispositivoSilobolsaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoSilobolsaDb>[]): IDispositivoSilobolsaDTO[];
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO;
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[];
    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO;
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[];
    static getDescripcionAlerta(codigo: number): string;
    static getNombreComando(puerto: number): string;
}
//# sourceMappingURL=silobolsa copy.d.ts.map