import { LeanDocument } from 'mongoose';
import { IDispositivoCorrectoraDb, IDispositivoCorrectoraDTO, IPedidoReporteDb, IPedidoReporteDTO, IReporteCorrectoraDb, IReporteCorrectoraDTO } from '../../modelos';
export declare class CorrectoraParserService {
    static pedidoReporte(dato: LeanDocument<IPedidoReporteDb>): IPedidoReporteDTO;
    static pedidosReportes(datos: LeanDocument<IPedidoReporteDb>[]): IPedidoReporteDTO[];
    static reporte(dato: LeanDocument<IReporteCorrectoraDb>): IReporteCorrectoraDTO;
    static reportes(datos: LeanDocument<IReporteCorrectoraDb>[]): IReporteCorrectoraDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoCorrectoraDb>): IDispositivoCorrectoraDTO;
    static dispositivos(datos: LeanDocument<IDispositivoCorrectoraDb>[]): IDispositivoCorrectoraDTO[];
}
//# sourceMappingURL=correctora.d.ts.map