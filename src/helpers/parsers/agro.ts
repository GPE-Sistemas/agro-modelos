import { LeanDocument } from 'mongoose';
import { IAlertaDb, IAlertaDTO, IAnimalDb, IAnimalDTO, IBajaDb, IBajaDTO, ICategoriaDb, ICategoriaDTO, IComandoDb, IComandoDTO, ICorralDb, ICorralDTO, ICorrectoraDb, ICorrectoraDTO, IDiagnosticoDb, IDiagnosticoDTO, IDispositivoDb, IDispositivoDTO, IDispositivoSilobolsaDTO, IEspecieDb, IEspecieDTO, IEstablecimientoDb, IEstablecimientoDTO, IEventoEspecificoDb, IEventoEspecificoDTO, IGrupoDb, IGrupoDTO, ILogDispositivoDb, ILogDispositivoDTO, ILoteAnimalDb, ILoteAnimalDTO, ILoteSilobolsaDb, ILoteSilobolsaDTO, IPesajeDb, IPesajeDTO, IRazaDb, IRazaDTO, IServicioDb, IServicioDTO, ISilobolsaDb, ISilobolsaDTO, ISubcategoriaDb, ISubcategoriaDTO, ITipoBajaDb, ITipoBajaDTO, ITipoTratamientoDb, ITipoTratamientoDTO, ITipoVacunaDb, ITipoVacunaDTO, ITratamientoDb, ITratamientoDTO, IVacunacionDb, IVacunacionDTO } from '../../modelos';
import { getEstadoComando } from '../helpers';

export class AgroParserService {

    static corral(dato: LeanDocument<ICorralDb>): ICorralDTO {
        const dto: ICorralDTO = {
            _id: dato._id.toHexString(),
            color: dato.color,
            coordenadas: dato.coordenadas,
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static corrales(datos: LeanDocument<ICorralDb>[]): ICorralDTO[] {
        const dto: ICorralDTO[] = [];
        for (const dato of datos) {
            dto.push(this.corral(dato));
        }
        return dto;
    }
    static grupo(dato: LeanDocument<IGrupoDb>): IGrupoDTO {
        const dto: IGrupoDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static grupos(datos: LeanDocument<IGrupoDb>[]): IGrupoDTO[] {
        const dto: IGrupoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.grupo(dato));
        }
        return dto;
    }
    static establecimiento(dato: LeanDocument<IEstablecimientoDb>): IEstablecimientoDTO {
        const dto: IEstablecimientoDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            coordenadas: dato.coordenadas?.map(c1 => c1?.map(c2 => c2)),
        };
        return dto;
    }
    static establecimientos(datos: LeanDocument<IEstablecimientoDb>[]): IEstablecimientoDTO[] {
        const dto: IEstablecimientoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.establecimiento(dato));
        }
        return dto;
    }
    static alerta(dato: LeanDocument<IAlertaDb>): IAlertaDTO {
        const dto: IAlertaDTO = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            fecha: dato.fecha.toISOString(),
            mensaje: dato.mensaje,
            aplicacion: dato.aplicacion,
            archivada: dato.archivada,
            comentarios: dato.comentarios?.map( c => {
                return { fecha: c.fecha.toISOString(), usuario: c.usuario, comentario: c.comentario};
            }),
            deviceName: dato.deviceName,
            estadoActual: dato.estadoActual,
            estados: dato.estados?.map(e => {
                return { fecha: e.fecha.toISOString(), usuario: e.usuario, estado: e.estado };
            }),
            idAsignado: dato.idAsignado,
            mensajeCorto: dato.mensajeCorto,
            nivel: dato.nivel,
            nombreAsignado: dato.nombreAsignado,
            valor: dato.valor
        };
        return dto;
    }
    static alertas(datos: LeanDocument<IAlertaDb>[]): IAlertaDTO[] {
        const dto: IAlertaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.alerta(dato));
        }
        return dto;
    }
    static dispositivo(dato: LeanDocument<IDispositivoDb>): IDispositivoDTO {
        const dto: IDispositivoDTO = {
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
        return dto;
    }
    static dispositivos(datos: LeanDocument<IDispositivoDb>[]): IDispositivoDTO[] {
        const dto: IDispositivoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.dispositivo(dato));
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
            dto.push(this.logDispositivo(dato));
        }
        return dto;
    }
    static comando(dato: LeanDocument<IComandoDb>): IComandoDTO {
        const dto: IComandoDTO = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            fCnt: dato.fCnt,
            payload: dato.payload,
            puerto: dato.puerto,
            fecha: dato.fecha.toISOString(),
            usuario: dato.usuario,
            aplicacion: dato.aplicacion,
            descripcion: dato.deveui,
            // Calculado
            estado: getEstadoComando(dato.ejecutado, dato.error),
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === null ? delete (dto as any)[key] : {});
        return dto;
    }
    static comandos(datos: LeanDocument<IComandoDb>[]): IComandoDTO[] {
        const dto: IComandoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.comando(dato));
        }
        return dto;
    }


    // Animales

    static especie(dato: LeanDocument<IEspecieDb>): IEspecieDTO {
        const dto: IEspecieDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static especies(datos: LeanDocument<IEspecieDb>[]): IEspecieDTO[] {
        const dto: IEspecieDTO[] = [];
        for (const dato of datos) {
            dto.push(this.especie(dato));
        }
        return dto;
    }

    static raza(dato: LeanDocument<IRazaDb>): IRazaDTO {
        const dto: IRazaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idEspecie: dato.idEspecie?.toHexString(),
            //
            especie: dato.especie ? this.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static razas(datos: LeanDocument<IRazaDb>[]): IRazaDTO[] {
        const dto: IRazaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.raza(dato));
        }
        return dto;
    }

    static categoria(dato: LeanDocument<ICategoriaDb>): ICategoriaDTO {
        const dto: ICategoriaDTO = {
            _id: dato._id?.toHexString(),
            nombre: dato.nombre,
            idEspecie: dato.idEspecie?.toHexString(),
            sexo: dato.sexo,
            edadMaxMeses: dato.edadMaxMeses,
            edadMinMeses: dato.edadMinMeses,
            //
            especie: dato.especie ? this.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static categorias(datos: LeanDocument<ICategoriaDb>[]): ICategoriaDTO[] {
        const dto: ICategoriaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.categoria(dato));
        }
        return dto;
    }

    static animal(dato: LeanDocument<IAnimalDb>, vacunaciones?: IVacunacionDTO[], tratamientos?: ITratamientoDTO[],
        eventosEspecificos?: IEventoEspecificoDTO[], pesajes?: IPesajeDTO[], servicios?: IServicioDTO[],
        madre?: IAnimalDTO, padre?: IAnimalDTO): IAnimalDTO {
        const dto: IAnimalDTO = {
            _id: dato._id?.toHexString(),
            caravana: dato.caravana,
            deveuiDispositivo: dato.deveuiDispositivo,
            dientes: dato.dientes,
            fechaAlta: dato.fechaAlta,
            fechaNacimiento: dato.fechaNacimiento,
            foto: dato.foto,
            idBaja: dato.idBaja?.toHexString(),
            idCategoria: dato.idCategoria?.toHexString(),
            idCorral: dato.idCorral?.toHexString(),
            idEspecie: dato.idEspecie?.toHexString(),
            idEstablecimiento: dato.idEstablecimiento?.toHexString(),
            idGrupos: dato.idGrupos?.map(e => e?.toHexString()),
            idLote: dato.idLote?.toHexString(),
            idMadre: dato.idMadre?.toHexString(),
            idPadre: dato.idPadre?.toHexString(),
            idSubcategoria: dato.idSubcategoria?.toHexString(),
            idRaza: dato.idRaza?.toHexString(),
            sexo: dato.sexo,
            // Populate
            baja: dato.baja ? this.baja(dato.baja) : undefined,
            categoria: dato.categoria ? this.categoria(dato.categoria) : undefined,
            corral: dato.corral ? this.corral(dato.corral) : undefined,
            especie: dato.especie ? this.especie(dato.especie) : undefined,
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
            grupos: dato.grupos?.length ? this.grupos(dato.grupos) : undefined,
            lote: dato.lote ? this.loteAnimal(dato.lote) : undefined,
            madre,
            padre,
            subcategoria: dato.subcategoria ? this.subcategoria(dato.subcategoria) : undefined,
            raza: dato.raza ? this.raza(dato.raza) : undefined,
            //
            vacunaciones,
            tratamientos,
            eventosEspecificos,
            pesajes,
            servicios
        };
        Object.keys(dto).forEach(key => (dto as any)[key] === undefined ? delete (dto as any)[key] : {});
        return dto;
    }
    static animales(datos: LeanDocument<IAnimalDb>[]): IAnimalDTO[] {
        const dto: IAnimalDTO[] = [];
        for (const dato of datos) {
            dto.push(this.animal(dato));
        }
        return dto;
    }

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
            dto.push(this.tipoBaja(dato));
        }
        return dto;
    }

    static baja(dato: LeanDocument<IBajaDb>): IBajaDTO {
        const dto: IBajaDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idTipoBaja: dato.idTipoBaja,
            observaciones: dato.observaciones,
            // Populate
            tipoBaja: dato.tipoBaja ? this.tipoBaja(dato.tipoBaja) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static bajas(datos: LeanDocument<IBajaDb>[]): IBajaDTO[] {
        const dto: IBajaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.baja(dato));
        }
        return dto;
    }

    static loteAnimal(dato: LeanDocument<ILoteAnimalDb>): ILoteAnimalDTO {
        const dto: ILoteAnimalDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static lotesAnimales(datos: LeanDocument<ILoteAnimalDb>[]): ILoteAnimalDTO[] {
        const dto: ILoteAnimalDTO[] = [];
        for (const dato of datos) {
            dto.push(this.loteAnimal(dato));
        }
        return dto;
    }

    static diagnostico(dato: LeanDocument<IDiagnosticoDb>): IDiagnosticoDTO {
        const dto: IDiagnosticoDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static diagnosticos(datos: LeanDocument<IDiagnosticoDb>[]): IDiagnosticoDTO[] {
        const dto: IDiagnosticoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.diagnostico(dato));
        }
        return dto;
    }

    static subcategoria(dato: LeanDocument<ISubcategoriaDb>): ISubcategoriaDTO {
        const dto: ISubcategoriaDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            pesoMax: dato.pesoMax,
            pesoMin: dato.pesoMin,
            idCategoria: dato.idCategoria,
            //
            categoria: dato.categoria ? this.categoria(dato.categoria) : undefined,
        };
        return dto;
    }
    static subcategorias(datos: LeanDocument<ISubcategoriaDb>[]): ISubcategoriaDTO[] {
        const dto: ISubcategoriaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.subcategoria(dato));
        }
        return dto;
    }

    static tipoTratamiento(dato: LeanDocument<ITipoTratamientoDb>): ITipoTratamientoDTO {
        const dto: ITipoTratamientoDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static tipoTratamientos(datos: LeanDocument<ITipoTratamientoDb>[]): ITipoTratamientoDTO[] {
        const dto: ITipoTratamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.tipoTratamiento(dato));
        }
        return dto;
    }

    static tipoVacuna(dato: LeanDocument<ITipoVacunaDb>): ITipoVacunaDTO {
        const dto: ITipoVacunaDTO = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static tipoVacunas(datos: LeanDocument<ITipoVacunaDb>[]): ITipoVacunaDTO[] {
        const dto: ITipoVacunaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.tipoVacuna(dato));
        }
        return dto;
    }

    static tratamiento(dato: LeanDocument<ITratamientoDb>): ITratamientoDTO {
        const dto: ITratamientoDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal,
            idDiagnostico: dato.idDiagnostico,
            idTipoTratamiento: dato.idTipoTratamiento,
            observaciones: dato.observaciones,
            producto: dato.producto,
            //
            animal: dato.animal ? this.animal(dato.animal) : undefined,
            diagnostico: dato.diagnostico ? this.diagnostico(dato.diagnostico) : undefined,
            tipoTratamiento: dato.tipoTratamiento ? this.tipoTratamiento(dato.tipoTratamiento) : undefined,
        };
        Object.keys(dto).forEach(key => !(dto as any)[key] ? delete (dto as any)[key] : {});
        return dto;
    }
    static tratamientos(datos: LeanDocument<ITratamientoDb>[]): ITratamientoDTO[] {
        const dto: ITratamientoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.tratamiento(dato));
        }
        return dto;
    }

    static vacunacion(dato: LeanDocument<IVacunacionDb>): IVacunacionDTO {
        const dto: IVacunacionDTO = {
            _id: dato._id.toHexString(),
            dosis: dato.dosis,
            fecha: dato.fecha,
            idAnimal: dato.idAnimal,
            idTipoVacuna: dato.idTipoVacuna,
            observaciones: dato.observaciones,
            producto: dato.producto,
            //
            tipoVacuna: dato.tipoVacuna ? this.tipoVacuna(dato.tipoVacuna) : undefined,
            animal: dato.animal ? this.animal(dato.animal) : undefined,
        };
        return dto;
    }
    static vacunaciones(datos: LeanDocument<IVacunacionDb>[]): IVacunacionDTO[] {
        const dto: IVacunacionDTO[] = [];
        for (const dato of datos) {
            dto.push(this.vacunacion(dato));
        }
        return dto;
    }

    static eventoEspecifico(dato: LeanDocument<IEventoEspecificoDb>): IEventoEspecificoDTO {
        const dto: IEventoEspecificoDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal,
            titulo: dato.titulo,
            observaciones: dato.observaciones,
            //
            animal: dato.animal ? this.animal(dato.animal) : undefined,
        };
        return dto;
    }
    static eventosEspecificos(datos: LeanDocument<IEventoEspecificoDb>[]): IEventoEspecificoDTO[] {
        const dto: IEventoEspecificoDTO[] = [];
        for (const dato of datos) {
            dto.push(this.eventoEspecifico(dato));
        }
        return dto;
    }

    static pesaje(dato: LeanDocument<IPesajeDb>): IPesajeDTO {
        const dto: IPesajeDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal,
            peso: dato.peso,
            observaciones: dato.observaciones,
            //
            animal: dato.animal ? this.animal(dato.animal) : undefined,
        };
        return dto;
    }
    static pesajes(datos: LeanDocument<IPesajeDb>[]): IPesajeDTO[] {
        const dto: IPesajeDTO[] = [];
        for (const dato of datos) {
            dto.push(this.pesaje(dato));
        }
        return dto;
    }

    static servicio(dato: LeanDocument<IServicioDb>): IServicioDTO {
        const dto: IServicioDTO = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: dato.idAnimal,
            inicio: dato.inicio,
            observaciones: dato.observaciones,
            //
            animal: dato.animal ? this.animal(dato.animal) : undefined,
        };
        return dto;
    }
    static servicios(datos: LeanDocument<IServicioDb>[]): IServicioDTO[] {
        const dto: IServicioDTO[] = [];
        for (const dato of datos) {
            dto.push(this.servicio(dato));
        }
        return dto;
    }

    // Silobolsa

    static silobolsa(dato: LeanDocument<ISilobolsaDb>, dispositivos?: IDispositivoSilobolsaDTO[]): ISilobolsaDTO {
        const dto: ISilobolsaDTO = {
            _id: dato._id.toHexString(),
            cosecha: dato.cosecha,
            deveuiDispositivos: dato.deveuiDispositivos,
            especie: dato.especie,
            fechaConfeccion: dato.fechaConfeccion.toISOString(),
            idEstablecimiento: dato.idEstablecimiento,
            idLote: dato.idLote,
            metros: dato.metros,
            numero: dato.numero,
            producto: dato.producto,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
            lote: dato.lote ? this.loteSilobolsa(dato.lote) : undefined,
            dispositivos,
        };
        return dto;
    }
    static silobolsas(datos: LeanDocument<ISilobolsaDb>[]): ISilobolsaDTO[] {
        const dto: ISilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.silobolsa(dato));
        }
        return dto;
    }

    static loteSilobolsa(dato: LeanDocument<ILoteSilobolsaDb>): ILoteSilobolsaDTO {
        const dto: ILoteSilobolsaDTO = {
            _id: dato._id.toHexString(),
            idEstablecimiento: dato.idEstablecimiento,
            nombre: dato.nombre,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        return dto;
    }
    static loteSilobolsas(datos: LeanDocument<ILoteSilobolsaDb>[]): ILoteSilobolsaDTO[] {
        const dto: ILoteSilobolsaDTO[] = [];
        for (const dato of datos) {
            dto.push(this.loteSilobolsa(dato));
        }
        return dto;
    }

    // Correctoras

    static correctora(dato: LeanDocument<ICorrectoraDb>): ICorrectoraDTO {
        const dto: ICorrectoraDTO = {
            _id: dato._id.toHexString(),
            bateria: dato.bateria,
            fechaAsignacion: dato.fechaAsignacion.toISOString(),
            deveui: dato.deveui,
            firmware: dato.firmware,
            idUltimoReporte: dato.idUltimoReporte?.toHexString(),
            modelo: dato.modelo,
            numeroSerie: dato.numeroSerie,
            //
            // ultimoReporte: dato.ultimoReporte ? this.establecimiento(dato.ultimoReporte) : undefined,
        };
        return dto;
    }
    static correctoras(datos: LeanDocument<ICorrectoraDb>[]): ICorrectoraDTO[] {
        const dto: ICorrectoraDTO[] = [];
        for (const dato of datos) {
            dto.push(this.correctora(dato));
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
                const bateria = Math.trunc(100 - (mensajesEnviados * 100 / reportesPorFrecuencia[cantReportesDiarios - 1]));
                return bateria;
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
            73: 'Desplazamiento rápido',
        };
        let desc = alertas[codigo];
        if (!desc) {
            desc = 'Alerta no identificada';
        }
        return desc;
    }

}
