import { LeanDocument } from 'mongoose';
import { IDispositivoSensorNivelDb, IDispositivoSensorNivelDTO, IReporteSensorNivelDb, IReporteSensorNivelDTO } from '../../modelos';
export declare class SensorNivelParserService {
    static reporte(dato: LeanDocument<IReporteSensorNivelDb>): IReporteSensorNivelDTO;
    static reportes(datos: LeanDocument<IReporteSensorNivelDb>[]): IReporteSensorNivelDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoSensorNivelDb>): IDispositivoSensorNivelDTO;
    static dispositivos(datos: LeanDocument<IDispositivoSensorNivelDb>[]): IDispositivoSensorNivelDTO[];
}
//# sourceMappingURL=sensor-nivel.d.ts.map