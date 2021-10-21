import { LeanDocument } from 'mongoose';
import { IAlertaDb, IAlertaDTO, IAnimalDb, IAnimalDTO, IBajaDb, IBajaDTO, ICategoriaDb, ICategoriaDTO, IComandoDb, IComandoDTO, ICorrectoraDb, ICorrectoraDTO, IDiagnosticoDb, IDiagnosticoDTO, IDispositivoCaravanaDTO, IDispositivoCorrectoraDTO, IDispositivoDb, IDispositivoDTO, IDispositivoSensorNivelDTO, IDispositivoSilobolsaDTO, IDispositivoTrackerSilobolsaDTO, IEspecieDb, IEspecieDTO, IEstablecimientoDb, IEstablecimientoDTO, IEventoEspecificoDb, IEventoEspecificoDTO, IGrupoDb, IGrupoDTO, ILogDispositivoDb, ILogDispositivoDTO, ILoteDb, ILoteDTO, IOperarioDb, IOperarioDTO, IPesajeDb, IPesajeDTO, IPuntoInteresDb, IPuntoInteresDTO, IRazaDb, IRazaDTO, ISensorNivelDb, ISensorNivelDTO, IServicioDb, IServicioDTO, ISilobolsaDb, ISilobolsaDTO, ISubcategoriaDb, ISubcategoriaDTO, ITipoBajaDb, ITipoBajaDTO, ITipoTratamientoDb, ITipoTratamientoDTO, ITipoVacunaDb, ITipoVacunaDTO, ITratamientoDb, ITratamientoDTO, IVacunacionDb, IVacunacionDTO, IReporteSilobolsaDTO, IReporteTrackerSilobolsaDTO } from '../../modelos';
export declare class AgroParserService {
    static operario(dato: LeanDocument<IOperarioDb>): IOperarioDTO;
    static operarios(datos: LeanDocument<IOperarioDb>[]): IOperarioDTO[];
    static establecimiento(dato: LeanDocument<IEstablecimientoDb>): IEstablecimientoDTO;
    static establecimientos(datos: LeanDocument<IEstablecimientoDb>[]): IEstablecimientoDTO[];
    static puntoInteres(dato: LeanDocument<IPuntoInteresDb>): IPuntoInteresDTO;
    static puntosInteres(datos: LeanDocument<IPuntoInteresDb>[]): IPuntoInteresDTO[];
    static grupo(dato: LeanDocument<IGrupoDb>): IGrupoDTO;
    static grupos(datos: LeanDocument<IGrupoDb>[]): IGrupoDTO[];
    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO;
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[];
    static dispositivo(dato: LeanDocument<IDispositivoDb>): IDispositivoDTO;
    static dispositivos(datos: LeanDocument<IDispositivoDb>[]): IDispositivoDTO[];
    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO;
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[];
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO;
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[];
    static lote(dato: LeanDocument<ILoteDb>): ILoteDTO;
    static lotes(datos: LeanDocument<ILoteDb>[]): ILoteDTO[];
    static especie(dato: LeanDocument<IEspecieDb>): IEspecieDTO;
    static especies(datos: LeanDocument<IEspecieDb>[]): IEspecieDTO[];
    static raza(dato: LeanDocument<IRazaDb>): IRazaDTO;
    static razas(datos: LeanDocument<IRazaDb>[]): IRazaDTO[];
    static categoria(dato: LeanDocument<ICategoriaDb>): ICategoriaDTO;
    static categorias(datos: LeanDocument<ICategoriaDb>[]): ICategoriaDTO[];
    static animal(dato: LeanDocument<IAnimalDb>, dispositivo?: IDispositivoCaravanaDTO, vacunaciones?: IVacunacionDTO[], tratamientos?: ITratamientoDTO[], eventosEspecificos?: IEventoEspecificoDTO[], pesajes?: IPesajeDTO[], servicios?: IServicioDTO[], madre?: IAnimalDTO, padre?: IAnimalDTO): IAnimalDTO;
    static animales(datos: LeanDocument<IAnimalDb>[], dispositivos?: IDispositivoCaravanaDTO[]): IAnimalDTO[];
    static tipoBaja(dato: LeanDocument<ITipoBajaDb>): ITipoBajaDTO;
    static tiposBajas(datos: LeanDocument<ITipoBajaDb>[]): ITipoBajaDTO[];
    static baja(dato: LeanDocument<IBajaDb>): IBajaDTO;
    static bajas(datos: LeanDocument<IBajaDb>[]): IBajaDTO[];
    static diagnostico(dato: LeanDocument<IDiagnosticoDb>): IDiagnosticoDTO;
    static diagnosticos(datos: LeanDocument<IDiagnosticoDb>[]): IDiagnosticoDTO[];
    static subcategoria(dato: LeanDocument<ISubcategoriaDb>): ISubcategoriaDTO;
    static subcategorias(datos: LeanDocument<ISubcategoriaDb>[]): ISubcategoriaDTO[];
    static tipoTratamiento(dato: LeanDocument<ITipoTratamientoDb>): ITipoTratamientoDTO;
    static tipoTratamientos(datos: LeanDocument<ITipoTratamientoDb>[]): ITipoTratamientoDTO[];
    static tipoVacuna(dato: LeanDocument<ITipoVacunaDb>): ITipoVacunaDTO;
    static tipoVacunas(datos: LeanDocument<ITipoVacunaDb>[]): ITipoVacunaDTO[];
    static tratamiento(dato: LeanDocument<ITratamientoDb>): ITratamientoDTO;
    static tratamientos(datos: LeanDocument<ITratamientoDb>[]): ITratamientoDTO[];
    static vacunacion(dato: LeanDocument<IVacunacionDb>): IVacunacionDTO;
    static vacunaciones(datos: LeanDocument<IVacunacionDb>[]): IVacunacionDTO[];
    static eventoEspecifico(dato: LeanDocument<IEventoEspecificoDb>): IEventoEspecificoDTO;
    static eventosEspecificos(datos: LeanDocument<IEventoEspecificoDb>[]): IEventoEspecificoDTO[];
    static pesaje(dato: LeanDocument<IPesajeDb>): IPesajeDTO;
    static pesajes(datos: LeanDocument<IPesajeDb>[]): IPesajeDTO[];
    static servicio(dato: LeanDocument<IServicioDb>): IServicioDTO;
    static servicios(datos: LeanDocument<IServicioDb>[]): IServicioDTO[];
    static sensorNivel(dato: LeanDocument<ISensorNivelDb>, dispositivoEspecifico?: IDispositivoSensorNivelDTO): ISensorNivelDTO;
    static sensoresNivel(datos: LeanDocument<ISensorNivelDb>[], dispositivos?: IDispositivoSensorNivelDTO[]): ISensorNivelDTO[];
    static silobolsa(dato: LeanDocument<ISilobolsaDb>, lanzas?: IDispositivoSilobolsaDTO[], trackers?: IDispositivoTrackerSilobolsaDTO[], reporteLanza?: IReporteSilobolsaDTO, reportesLanza?: IReporteSilobolsaDTO[], reporteTracker?: IReporteTrackerSilobolsaDTO, reportesTracker?: IReporteTrackerSilobolsaDTO[]): ISilobolsaDTO;
    static silobolsas(datos: LeanDocument<ISilobolsaDb>[], lanzas?: IDispositivoSilobolsaDTO[], trackers?: IDispositivoTrackerSilobolsaDTO[]): ISilobolsaDTO[];
    static correctora(dato: LeanDocument<ICorrectoraDb>, dispositivo?: IDispositivoCorrectoraDTO): ICorrectoraDTO;
    static correctoras(datos: LeanDocument<ICorrectoraDb>[], dispositivos?: IDispositivoCorrectoraDTO[]): ICorrectoraDTO[];
    static horasAHexa(horas: string[]): string;
    static hexaAHoras(hexa: string): string[];
    static getBateria(cantReportesDiarios: number, mensajesEnviados: number): number | undefined;
    static getDuracion(cantReportesDiarios: number, mensajesEnviados: number): string | undefined;
    static getDescripcionAlerta(codigo: number): string;
}
//# sourceMappingURL=agro.d.ts.map