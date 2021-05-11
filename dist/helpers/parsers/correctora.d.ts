import { LeanDocument } from 'mongoose';
import { IDispositivoCorrectoraDb, IDispositivoCorrectoraDTO, IReporteCorrectoraDb, IReporteCorrectoraDTO } from '../../modelos';
export declare class CorrectoraParserService {
    static reporte(dato: LeanDocument<IReporteCorrectoraDb>): IReporteCorrectoraDTO;
    static reportes(datos: LeanDocument<IReporteCorrectoraDb>[]): IReporteCorrectoraDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoCorrectoraDb>): IDispositivoCorrectoraDTO;
    static dispositivos(datos: LeanDocument<IDispositivoCorrectoraDb>[]): IDispositivoCorrectoraDTO[];
}
//# sourceMappingURL=correctora.d.ts.map