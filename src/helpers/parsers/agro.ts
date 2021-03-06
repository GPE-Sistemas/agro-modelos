import { LeanDocument } from 'mongoose';
import {
    IAlertaDb,
    IAlertaDTO,
    IAnimalDb,
    IAnimalDTO,
    IBajaDb,
    IBajaDTO,
    ICategoriaDb,
    ICategoriaDTO,
    IComandoDb,
    IComandoDTO,
    ICorrectoraDb,
    ICorrectoraDTO,
    IDiagnosticoDb,
    IDiagnosticoDTO,
    IDispositivoCaravanaDTO,
    IDispositivoCorrectoraDTO,
    IDispositivoDb,
    IDispositivoDTO,
    IDispositivoSensorNivelDTO,
    IDispositivoSilobolsaDTO,
    IDispositivoTrackerSilobolsaDTO,
    IEspecieDb,
    IEspecieDTO,
    IEstablecimientoDb,
    IEstablecimientoDTO,
    IEventoEspecificoDb,
    IEventoEspecificoDTO,
    IGrupoDb,
    IGrupoDTO,
    ILogDispositivoDb,
    ILogDispositivoDTO,
    ILoteDb,
    ILoteDTO,
    IOperarioDb,
    IOperarioDTO,
    IPesajeDb,
    IPesajeDTO,
    IPuntoInteresDb,
    IPuntoInteresDTO,
    IRazaDb,
    IRazaDTO,
    ISensorNivelDb,
    ISensorNivelDTO,
    IServicioDb,
    IServicioDTO,
    ISilobolsaDb,
    ISilobolsaDTO,
    ISubcategoriaDb,
    ISubcategoriaDTO,
    ITipoBajaDb,
    ITipoBajaDTO,
    ITipoTratamientoDb,
    ITipoTratamientoDTO,
    ITipoVacunaDb,
    ITipoVacunaDTO,
    ITratamientoDb,
    ITratamientoDTO,
    IVacunacionDb,
    IVacunacionDTO,
    IReporteSilobolsaDTO,
    IReporteTrackerSilobolsaDTO
} from '../../modelos';
import { getEstadoComando } from '../helpers';

export class AgroParserService {

    static operario(dato: LeanDocument<IOperarioDb>): IOperarioDTO {
        return {
            _id: dato._id.toHexString(),
            idUsuario: dato.idUsuario?.toHexString(),
            permisos: dato.permisos,
        };
    }
    static operarios(datos: LeanDocument<IOperarioDb>[]): IOperarioDTO[] {
        const dto: IOperarioDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.operario(dato));
        }
        return dto;
    }
    static establecimiento(dato: LeanDocument<IEstablecimientoDb>): IEstablecimientoDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            coordenadas: dato.coordenadas?.map(c1 => c1?.map(c2 => c2)),
        };
    }
    static establecimientos(datos: LeanDocument<IEstablecimientoDb>[]): IEstablecimientoDTO[] {
        const dto: IEstablecimientoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.establecimiento(dato));
        }
        return dto;
    }
    static puntoInteres(dato: LeanDocument<IPuntoInteresDb>): IPuntoInteresDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            icono: dato.icono,
            coordenadas: dato.coordenadas,
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static puntosInteres(datos: LeanDocument<IPuntoInteresDb>[]): IPuntoInteresDTO[] {
        const dto: IPuntoInteresDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.puntoInteres(dato));
        }
        return dto;
    }
    static grupo(dato: LeanDocument<IGrupoDb>): IGrupoDTO {
        const dto: IGrupoDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static grupos(datos: LeanDocument<IGrupoDb>[]): IGrupoDTO[] {
        const dto: IGrupoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.grupo(dato));
        }
        return dto;
    }
    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO {
        return {
            _id: dato._id.toHexString(),
            fecha: dato.fecha?.toISOString(),
            aplicacion: dato.aplicacion,
            tipo: dato.tipo,
            nivel: dato.nivel,
            idAsignado: dato.idAsignado,
            nombreAsignado: dato.nombreAsignado,
            estadoActual: dato.estadoActual,
            archivada: dato.archivada,
            comentarios: dato.comentarios || [],
            estados: dato.estados || [],
            reportes: dato.reportes || [],
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[] {
        const dto: IAlertaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.alerta(dato));
        }
        return dto;
    }
    static dispositivo(dato: LeanDocument<IDispositivoDb>): IDispositivoDTO {
        return {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            adr: dato.adr,
            dr: dato.dr,
            fCnt: dato.fCnt,
            fechaUltimoUplink: dato.fechaUltimoUplink.toISOString(),
            metadatos: dato.metadatos,
            red: dato.red,
            deviceName: dato.deviceName,
            tipo: dato.tipo,
            idUltimoComando: dato.idUltimoComando?.toHexString(),
            //
            ultimoComando: dato.ultimoComando ? AgroParserService.comando(dato.ultimoComando) : undefined,
        };
    }
    static dispositivos(datos: LeanDocument<IDispositivoDb>[]): IDispositivoDTO[] {
        const dto: IDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.dispositivo(dato));
        }
        return dto;
    }
    static logDispositivo(dato: LeanDocument<ILogDispositivoDb>): ILogDispositivoDTO {
        const dto: ILogDispositivoDTO = {
            _id: dato._id.toHexString(),
            contenido: dato.contenido,
            deveui: dato.deveui,
            evento: dato.evento,
            fecha: dato.fecha.toISOString(),
            payload: dato.payload,
            puerto: dato.puerto,
            aplicacion: dato.aplicacion,
            deviceName: dato.deviceName,
            fCnt: dato.fCnt
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static logsDispositivos(datos: LeanDocument<ILogDispositivoDb>[]): ILogDispositivoDTO[] {
        const dto: ILogDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.logDispositivo(dato));
        }
        return dto;
    }
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO {
        const dto: IComandoDTO = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            idAsignado: dato.idAsignado,
            nombreAsignado: dato.nombreAsignado,
            fCnt: dato.fCnt,
            payload: dato.payload,
            puerto: dato.puerto,
            fecha: dato.fecha?.toISOString?.(),
            usuario: dato.usuario,
            aplicacion: dato.aplicacion,
            descripcion: dato.descripcion,
            valor: dato.valor,
            // Calculado
            estado: getEstadoComando(dato.ejecutado, dato.error),
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[] {
        const dto: IComandoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.comando(dato));
        }
        return dto;
    }
    static lote(dato: LeanDocument<ILoteDb>): ILoteDTO {
        const dto: ILoteDTO = {
            _id: dato._id.toHexString(),
            color: dato.color,
            coordenadas: dato.coordenadas,
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static lotes(datos: LeanDocument<ILoteDb>[]): ILoteDTO[] {
        const dto: ILoteDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.lote(dato));
        }
        return dto;
    }

    // Animales

    static especie(dato: LeanDocument<IEspecieDb>): IEspecieDTO {
        const dto: IEspecieDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            icono: dato.icono,
            iconoFueraCorral: dato.iconoFueraCorral,
            iconoFueraEstablecimiento: dato.iconoFueraEstablecimiento
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static especies(datos: LeanDocument<IEspecieDb>[]): IEspecieDTO[] {
        const dto: IEspecieDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.especie(dato));
        }
        return dto;
    }
    static raza(dato: LeanDocument<IRazaDb>): IRazaDTO {
        const dto: IRazaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idEspecie: dato.idEspecie?.toHexString(),
            //
            especie: dato.especie ? AgroParserService.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static razas(datos: LeanDocument<IRazaDb>[]): IRazaDTO[] {
        const dto: IRazaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.raza(dato));
        }
        return dto;
    }
    static categoria(dato: LeanDocument<ICategoriaDb>): ICategoriaDTO {
        const dto: ICategoriaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idEspecie: dato.idEspecie?.toHexString(),
            sexo: dato.sexo,
            icono: dato.icono,
            iconoFueraCorral: dato.iconoFueraCorral,
            iconoFueraEstablecimiento: dato.iconoFueraEstablecimiento,
            //
            especie: dato.especie ? AgroParserService.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static categorias(datos: LeanDocument<ICategoriaDb>[]): ICategoriaDTO[] {
        const dto: ICategoriaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.categoria(dato));
        }
        return dto;
    }
    static animal(dato: LeanDocument<IAnimalDb>, dispositivo?: IDispositivoCaravanaDTO, vacunaciones?: IVacunacionDTO[], tratamientos?: ITratamientoDTO[],
        eventosEspecificos?: IEventoEspecificoDTO[], pesajes?: IPesajeDTO[], servicios?: IServicioDTO[],
        madre?: IAnimalDTO, padre?: IAnimalDTO): IAnimalDTO {
        const dto: IAnimalDTO = {
            _id: dato._id?.toHexString(),
            activo: dato.activo,
            caravana: dato.caravana,
            deveui: dato.deveui,
            dientes: dato.dientes,
            fechaAlta: dato.fechaAlta,
            fechaNacimiento: dato.fechaNacimiento,
            foto: dato.foto,
            idBaja: dato.idBaja?.toHexString(),
            idCategoria: dato.idCategoria?.toHexString(),
            idEspecie: dato.idEspecie?.toHexString(),
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            idGrupo: dato.idGrupo?.toHexString(),
            idLote: dato.idLote?.toHexString(),
            idMadre: dato.idMadre?.toHexString(),
            idPadre: dato.idPadre?.toHexString(),
            idSubcategoria: dato.idSubcategoria?.toHexString(),
            idRaza: dato.idRaza?.toHexString(),
            sexo: dato.sexo,
            // Populate
            baja: dato.baja ? AgroParserService.baja(dato.baja) : undefined,
            categoria: dato.categoria ? AgroParserService.categoria(dato.categoria) : undefined,
            especie: dato.especie ? AgroParserService.especie(dato.especie) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
            grupo: dato.grupo ? AgroParserService.grupo(dato.grupo) : undefined,
            lote: dato.lote ? AgroParserService.lote(dato.lote) : undefined,
            madre,
            padre,
            subcategoria: dato.subcategoria ? AgroParserService.subcategoria(dato.subcategoria) : undefined,
            raza: dato.raza ? AgroParserService.raza(dato.raza) : undefined,
            //
            dispositivo,
            vacunaciones,
            tratamientos,
            eventosEspecificos,
            pesajes,
            servicios
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === undefined ? delete (dto as any)[key] : {});
        return dto;
    }
    static animales(datos: LeanDocument<IAnimalDb>[], dispositivos?: IDispositivoCaravanaDTO[]): IAnimalDTO[] {
        const dto: IAnimalDTO[] = [];
        for (const dato of datos) {
            const dispositivo = dispositivos?.find(d => dato.deveui === d.deveui);
            dto.push(AgroParserService.animal(dato, dispositivo));
        }
        return dto;
    }

    // Eventos
    static tipoBaja(dato: LeanDocument<ITipoBajaDb>): ITipoBajaDTO {
        const dto: ITipoBajaDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static tiposBajas(datos: LeanDocument<ITipoBajaDb>[]): ITipoBajaDTO[] {
        const dto: ITipoBajaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoBaja(dato));
        }
        return dto;
    }
    static baja(dato: LeanDocument<IBajaDb>): IBajaDTO {
        const dto: IBajaDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idTipoBaja: dato.idTipoBaja?.toHexString(),
            idAnimal: dato.idAnimal?.toHexString(),
            observaciones: dato.observaciones,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            // Populate
            tipoBaja: dato.tipoBaja ? AgroParserService.tipoBaja(dato.tipoBaja) : undefined,
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static bajas(datos: LeanDocument<IBajaDb>[]): IBajaDTO[] {
        const dto: IBajaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.baja(dato));
        }
        return dto;
    }
    static diagnostico(dato: LeanDocument<IDiagnosticoDb>): IDiagnosticoDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static diagnosticos(datos: LeanDocument<IDiagnosticoDb>[]): IDiagnosticoDTO[] {
        const dto: IDiagnosticoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.diagnostico(dato));
        }
        return dto;
    }
    static subcategoria(dato: LeanDocument<ISubcategoriaDb>): ISubcategoriaDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            pesoMax: dato.pesoMax,
            pesoMin: dato.pesoMin,
            idCategoria: dato.idCategoria?.toHexString(),
            //
            categoria: dato.categoria ? AgroParserService.categoria(dato.categoria) : undefined,
        };
    }
    static subcategorias(datos: LeanDocument<ISubcategoriaDb>[]): ISubcategoriaDTO[] {
        const dto: ISubcategoriaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.subcategoria(dato));
        }
        return dto;
    }
    static tipoTratamiento(dato: LeanDocument<ITipoTratamientoDb>): ITipoTratamientoDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static tipoTratamientos(datos: LeanDocument<ITipoTratamientoDb>[]): ITipoTratamientoDTO[] {
        const dto: ITipoTratamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoTratamiento(dato));
        }
        return dto;
    }
    static tipoVacuna(dato: LeanDocument<ITipoVacunaDb>): ITipoVacunaDTO {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static tipoVacunas(datos: LeanDocument<ITipoVacunaDb>[]): ITipoVacunaDTO[] {
        const dto: ITipoVacunaDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoVacuna(dato));
        }
        return dto;
    }
    static tratamiento(dato: LeanDocument<ITratamientoDb>): ITratamientoDTO {
        const dto: ITratamientoDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal?.toHexString(),
            idDiagnostico: dato.idDiagnostico?.toHexString(),
            idTipoTratamiento: dato.idTipoTratamiento?.toHexString(),
            observaciones: dato.observaciones,
            producto: dato.producto,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            diagnostico: dato.diagnostico ? AgroParserService.diagnostico(dato.diagnostico) : undefined,
            tipoTratamiento: dato.tipoTratamiento ? AgroParserService.tipoTratamiento(dato.tipoTratamiento) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static tratamientos(datos: LeanDocument<ITratamientoDb>[]): ITratamientoDTO[] {
        const dto: ITratamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tratamiento(dato));
        }
        return dto;
    }
    static vacunacion(dato: LeanDocument<IVacunacionDb>): IVacunacionDTO {
        return {
            _id: dato._id.toHexString(),
            dosis: dato.dosis,
            fecha: dato.fecha,
            idAnimal: dato.idAnimal?.toHexString(),
            idTipoVacuna: dato.idTipoVacuna?.toHexString(),
            observaciones: dato.observaciones,
            producto: dato.producto,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            tipoVacuna: dato.tipoVacuna ? AgroParserService.tipoVacuna(dato.tipoVacuna) : undefined,
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static vacunaciones(datos: LeanDocument<IVacunacionDb>[]): IVacunacionDTO[] {
        const dto: IVacunacionDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.vacunacion(dato));
        }
        return dto;
    }
    static eventoEspecifico(dato: LeanDocument<IEventoEspecificoDb>): IEventoEspecificoDTO {
        return {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal?.toHexString(),
            titulo: dato.titulo,
            observaciones: dato.observaciones,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static eventosEspecificos(datos: LeanDocument<IEventoEspecificoDb>[]): IEventoEspecificoDTO[] {
        const dto: IEventoEspecificoDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.eventoEspecifico(dato));
        }
        return dto;
    }
    static pesaje(dato: LeanDocument<IPesajeDb>): IPesajeDTO {
        return {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal?.toHexString(),
            peso: dato.peso,
            observaciones: dato.observaciones,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static pesajes(datos: LeanDocument<IPesajeDb>[]): IPesajeDTO[] {
        const dto: IPesajeDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.pesaje(dato));
        }
        return dto;
    }
    static servicio(dato: LeanDocument<IServicioDb>): IServicioDTO {
        return {
            _id: dato._id.toHexString(),
            fechaInicio: dato.fechaInicio,
            fechaFin: dato.fechaFin,
            idAnimal: dato.idAnimal?.toHexString(),
            observaciones: dato.observaciones,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static servicios(datos: LeanDocument<IServicioDb>[]): IServicioDTO[] {
        const dto: IServicioDTO[] = [];
        for (const dato of datos) {
            dto.push(AgroParserService.servicio(dato));
        }
        return dto;
    }

    //

    static sensorNivel(dato: LeanDocument<ISensorNivelDb>, dispositivoEspecifico?: IDispositivoSensorNivelDTO): ISensorNivelDTO {
        return {
            _id: dato._id.toHexString(),
            activo: dato.activo,
            deveui: dato.deveui,
            fechaCreacion: dato.fechaCreacion?.toISOString(),
            ubicacion: dato.ubicacion,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            idLote: dato.idLote?.toHexString(),
            nombre: dato.nombre,
            offset: dato.offset,
            ultimoReporte: dato.ultimoReporte,
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
            lote: dato.lote ? AgroParserService.lote(dato.lote) : undefined,
            dispositivo: dato.dispositivo ? AgroParserService.dispositivo(dato.dispositivo) : undefined,
            //
            dispositivoEspecifico,
        };
    }
    static sensoresNivel(datos: LeanDocument<ISensorNivelDb>[], dispositivos?: IDispositivoSensorNivelDTO[]): ISensorNivelDTO[] {
        const dto: ISensorNivelDTO[] = [];
        for (const dato of datos) {
            const dispositivo = dispositivos?.find(d => dato.deveui === d.deveui);
            dto.push(AgroParserService.sensorNivel(dato, dispositivo));
        }
        return dto;
    }

    // Silobolsa

    static silobolsa(
        dato: LeanDocument<ISilobolsaDb>,
        lanzas?: IDispositivoSilobolsaDTO[],
        trackers?: IDispositivoTrackerSilobolsaDTO[],
        reporteLanza?: IReporteSilobolsaDTO,
        reportesLanza?: IReporteSilobolsaDTO[],
        reporteTracker?: IReporteTrackerSilobolsaDTO,
        reportesTracker?: IReporteTrackerSilobolsaDTO[]
    ): ISilobolsaDTO {
        return {
            _id: dato._id.toHexString(),
            cosecha: dato.cosecha,
            deveuiLanzas: dato.deveuiLanzas,
            deveuiTrackers: dato.deveuiTrackers,
            especie: dato.especie,
            fechaConfeccion: dato.fechaConfeccion?.toISOString(),
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            idLote: dato.idLote?.toHexString(),
            metros: dato.metros,
            numero: dato.numero,
            producto: dato.producto,
            activa: dato.activa,
            fechaDesmantelacion: dato.fechaDesmantelacion?.toISOString(),
            ubicacion: dato.ubicacion,
            humedadConfeccion: dato.humedadConfeccion,
            tas: dato.tas,
            // Populate
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
            lote: dato.lote ? AgroParserService.lote(dato.lote) : undefined,
            lanzas,
            trackers,
            // Aggregate
            reporteLanza,
            reportesLanza,
            reporteTracker,
            reportesTracker
        };
    }
    static silobolsas(datos: LeanDocument<ISilobolsaDb>[], lanzas?: IDispositivoSilobolsaDTO[], trackers?: IDispositivoTrackerSilobolsaDTO[]): ISilobolsaDTO[] {
        const dto: ISilobolsaDTO[] = [];
        for (const dato of datos) {
            const lanzasSilo = lanzas?.filter(d => dato.deveuiLanzas.includes(d.deveui));
            const trackersSilo = trackers?.filter(d => dato.deveuiTrackers.includes(d.deveui));
            dto.push(AgroParserService.silobolsa(dato, lanzasSilo, trackersSilo));
        }
        return dto;
    }

    // Correctoras

    static correctora(dato: LeanDocument<ICorrectoraDb>, dispositivo?: IDispositivoCorrectoraDTO): ICorrectoraDTO {
        return {
            _id: dato._id.toHexString(),
            bateria: dato.bateria,
            fechaAsignacion: dato.fechaAsignacion.toISOString(),
            deveui: dato.deveui,
            firmware: dato.firmware,
            modelo: dato.modelo,
            numeroSerie: dato.numeroSerie,
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            idLote: dato.idLote?.toHexString(),
            activa: dato.activa,
            ubicacion: dato.ubicacion,
            //
            dispositivo,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
            lote: dato.lote ? AgroParserService.lote(dato.lote) : undefined,
        };
    }
    static correctoras(datos: LeanDocument<ICorrectoraDb>[], dispositivos?: IDispositivoCorrectoraDTO[]): ICorrectoraDTO[] {
        const dto: ICorrectoraDTO[] = [];
        for (const dato of datos) {
            const dispositivo = dispositivos?.find(d => d.deveui === dato.deveui);
            dto.push(AgroParserService.correctora(dato, dispositivo));
        }
        return dto;
    }

    // Otras funciones

    static horasAHexa(horas: string[]): string {
        const horasArr = Array.from(new Array(144), () => '0');
        for (const hora of horas) {
            const h = +hora.split(':')[0];
            const m = +hora.split(':')[1];
            const pos = (6 * h) + (m / 10);
            horasArr[pos] = '1';
        }
        const horasStr = horasArr.join('');
        let horasHexa = '';
        for (let i = 0; i < 144; i = i + 4) {
            horasHexa += parseInt(horasStr.substr(i, 4), 2).toString(16).toUpperCase();
        }
        return horasHexa;
    }

    static hexaAHoras(hexa: string): string[] {
        const horas = [];
        let binario = '';
        for (let x = 0; x < hexa.length; x++) {
            const char = hexa.charAt(x);
            let bin = parseInt(char, 16).toString(2);
            while (bin.length < 4) {
                bin = '0' + bin;
            }
            binario += bin;
        }
        for (let x = 0; x < binario.length; x++) {
            if (binario[x] === '1') {
                const minutos = x * 10;
                const date = new Date();
                date.setHours(0, 0, 0, 0);
                date.setMinutes(minutos);
                const hh = date.getHours();
                let mm = date.getMinutes().toString();
                while (mm.length < 2) {
                    mm += '0';
                }
                const hora = `${hh}:${mm}`;
                horas.push(hora);
            }
        }
        return horas;
    }

    static getBateria(cantReportesDiarios: number, mensajesEnviados: number): number | undefined {
        if (!cantReportesDiarios && mensajesEnviados) {
            return Math.trunc(100 - (mensajesEnviados * 100 / 9984));
        } else {
            if (mensajesEnviados) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                return Math.trunc(100 - (mensajesEnviados * 100 / reportesPorFrecuencia[cantReportesDiarios - 1]));
            } else {
                return;
            }
        }
    }

    static getDuracion(cantReportesDiarios: number, mensajesEnviados: number): string | undefined {
        if (!cantReportesDiarios && mensajesEnviados) {
            const reportesRestantes = 9984 - mensajesEnviados;
            const diasRestantes = Math.trunc(reportesRestantes / 96);
            const date = new Date();
            date.setDate(date.getDate() + diasRestantes);
            return date.toString();
        } else {
            if (mensajesEnviados) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                const reportesRestantes = reportesPorFrecuencia[cantReportesDiarios - 1] - mensajesEnviados;
                const diasRestantes = Math.trunc(reportesRestantes / cantReportesDiarios);
                const date = new Date();
                date.setDate(date.getDate() + diasRestantes);
                return date.toString();
            } else {
                return;
            }
        }
    }

    static getDescripcionAlerta(codigo: number): string {
        const alertas: { [key: number]: string } = {
            1: 'Animal fuera del establecimiento',
            2: 'Animal fuera del corral',
            33: 'GPS no lockeado',
            70: 'Movimiento brusco',
            71: 'Caida libre',
            72: 'Sin movimiento',
            73: 'Desplazamiento r??pido',
        };
        let desc = alertas[codigo];
        if (!desc) {
            desc = 'Alerta no identificada';
        }
        return desc;
    }

}
