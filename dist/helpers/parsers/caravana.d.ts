import { LeanDocument } from 'mongoose';
import { IAlertaCaravanaDb, IAlertaCaravanaDTO, IComandoDb, IComandoDTO, IDispositivoCaravanaDb, IDispositivoCaravanaDTO, ILogDispositivoDb, ILogDispositivoDTO, IReporteCaravanaDb, IReporteCaravanaDTO } from '../../modelos';
export declare class CaravanaParserService {
    static reporte(dato: LeanDocument<IReporteCaravanaDb>): IReporteCaravanaDTO;
    static reportes(datos: LeanDocument<IReporteCaravanaDb>[]): IReporteCaravanaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoCaravanaDb>): IDispositivoCaravanaDTO;
    static dispositivos(datos: LeanDocument<IDispositivoCaravanaDb>[]): IDispositivoCaravanaDTO[];
    static alerta(dato: LeanDocument<IAlertaCaravanaDb>): IAlertaCaravanaDTO;
    static alertas(datos: LeanDocument<IAlertaCaravanaDb>[]): IAlertaCaravanaDTO[];
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO;
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[];
    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO;
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[];
    static hexaAHoras(hexa: string): string[];
    static getBateria(cantReportesDiarios: number | undefined, mensajesEnviados: number): number | undefined;
    static getDuracion(cantReportesDiarios: number, mensajesEnviados: number): string | undefined;
    static getDescripcionAlerta(codigo: number): string;
    static getNombreComando(puerto: number): string;
}
//# sourceMappingURL=caravana.d.ts.map