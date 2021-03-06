"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgroParserService = void 0;
const helpers_1 = require("../helpers");
class AgroParserService {
    static operario(dato) {
        var _a;
        return {
            _id: dato._id.toHexString(),
            idUsuario: (_a = dato.idUsuario) === null || _a === void 0 ? void 0 : _a.toHexString(),
            permisos: dato.permisos,
        };
    }
    static operarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.operario(dato));
        }
        return dto;
    }
    static establecimiento(dato) {
        var _a;
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            coordenadas: (_a = dato.coordenadas) === null || _a === void 0 ? void 0 : _a.map(c1 => c1 === null || c1 === void 0 ? void 0 : c1.map(c2 => c2)),
        };
    }
    static establecimientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.establecimiento(dato));
        }
        return dto;
    }
    static puntoInteres(dato) {
        var _a;
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: (_a = dato.idEstablecimiento) === null || _a === void 0 ? void 0 : _a.toHexString(),
            icono: dato.icono,
            coordenadas: dato.coordenadas,
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static puntosInteres(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.puntoInteres(dato));
        }
        return dto;
    }
    static grupo(dato) {
        var _a;
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: (_a = dato.idEstablecimiento) === null || _a === void 0 ? void 0 : _a.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static grupos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.grupo(dato));
        }
        return dto;
    }
    static alerta(dato) {
        var _a, _b;
        return {
            _id: dato._id.toHexString(),
            fecha: (_a = dato.fecha) === null || _a === void 0 ? void 0 : _a.toISOString(),
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
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static alertas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.alerta(dato));
        }
        return dto;
    }
    static dispositivo(dato) {
        var _a;
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
            idUltimoComando: (_a = dato.idUltimoComando) === null || _a === void 0 ? void 0 : _a.toHexString(),
            //
            ultimoComando: dato.ultimoComando ? AgroParserService.comando(dato.ultimoComando) : undefined,
        };
    }
    static dispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.dispositivo(dato));
        }
        return dto;
    }
    static logDispositivo(dato) {
        const dto = {
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
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static logsDispositivos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.logDispositivo(dato));
        }
        return dto;
    }
    static comando(dato) {
        var _a, _b;
        const dto = {
            _id: dato._id.toHexString(),
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            idAsignado: dato.idAsignado,
            nombreAsignado: dato.nombreAsignado,
            fCnt: dato.fCnt,
            payload: dato.payload,
            puerto: dato.puerto,
            fecha: (_b = (_a = dato.fecha) === null || _a === void 0 ? void 0 : _a.toISOString) === null || _b === void 0 ? void 0 : _b.call(_a),
            usuario: dato.usuario,
            aplicacion: dato.aplicacion,
            descripcion: dato.descripcion,
            valor: dato.valor,
            // Calculado
            estado: (0, helpers_1.getEstadoComando)(dato.ejecutado, dato.error),
        };
        Object.keys(dto).forEach(key => dto[key] === null ? delete dto[key] : {});
        return dto;
    }
    static comandos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.comando(dato));
        }
        return dto;
    }
    static lote(dato) {
        var _a;
        const dto = {
            _id: dato._id.toHexString(),
            color: dato.color,
            coordenadas: dato.coordenadas,
            nombre: dato.nombre,
            idEstablecimiento: (_a = dato.idEstablecimiento) === null || _a === void 0 ? void 0 : _a.toHexString(),
            //
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static lotes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.lote(dato));
        }
        return dto;
    }
    // Animales
    static especie(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            icono: dato.icono,
            iconoFueraCorral: dato.iconoFueraCorral,
            iconoFueraEstablecimiento: dato.iconoFueraEstablecimiento
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static especies(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.especie(dato));
        }
        return dto;
    }
    static raza(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            idEspecie: (_b = dato.idEspecie) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            especie: dato.especie ? AgroParserService.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static razas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.raza(dato));
        }
        return dto;
    }
    static categoria(dato) {
        var _a, _b;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            idEspecie: (_b = dato.idEspecie) === null || _b === void 0 ? void 0 : _b.toHexString(),
            sexo: dato.sexo,
            icono: dato.icono,
            iconoFueraCorral: dato.iconoFueraCorral,
            iconoFueraEstablecimiento: dato.iconoFueraEstablecimiento,
            //
            especie: dato.especie ? AgroParserService.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static categorias(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.categoria(dato));
        }
        return dto;
    }
    static animal(dato, dispositivo, vacunaciones, tratamientos, eventosEspecificos, pesajes, servicios, madre, padre) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            activo: dato.activo,
            caravana: dato.caravana,
            deveui: dato.deveui,
            dientes: dato.dientes,
            fechaAlta: dato.fechaAlta,
            fechaNacimiento: dato.fechaNacimiento,
            foto: dato.foto,
            idBaja: (_b = dato.idBaja) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idCategoria: (_c = dato.idCategoria) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idEspecie: (_d = dato.idEspecie) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idEstablecimiento: (_e = dato.idEstablecimiento) === null || _e === void 0 ? void 0 : _e.toHexString(),
            idGrupo: (_f = dato.idGrupo) === null || _f === void 0 ? void 0 : _f.toHexString(),
            idLote: (_g = dato.idLote) === null || _g === void 0 ? void 0 : _g.toHexString(),
            idMadre: (_h = dato.idMadre) === null || _h === void 0 ? void 0 : _h.toHexString(),
            idPadre: (_j = dato.idPadre) === null || _j === void 0 ? void 0 : _j.toHexString(),
            idSubcategoria: (_k = dato.idSubcategoria) === null || _k === void 0 ? void 0 : _k.toHexString(),
            idRaza: (_l = dato.idRaza) === null || _l === void 0 ? void 0 : _l.toHexString(),
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
        Object.keys(dto).forEach(key => dto[key] === undefined ? delete dto[key] : {});
        return dto;
    }
    static animales(datos, dispositivos) {
        const dto = [];
        for (const dato of datos) {
            const dispositivo = dispositivos === null || dispositivos === void 0 ? void 0 : dispositivos.find(d => dato.deveui === d.deveui);
            dto.push(AgroParserService.animal(dato, dispositivo));
        }
        return dto;
    }
    // Eventos
    static tipoBaja(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static tiposBajas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoBaja(dato));
        }
        return dto;
    }
    static baja(dato) {
        var _a, _b, _c;
        const dto = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idTipoBaja: (_a = dato.idTipoBaja) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idAnimal: (_b = dato.idAnimal) === null || _b === void 0 ? void 0 : _b.toHexString(),
            observaciones: dato.observaciones,
            idEstablecimiento: (_c = dato.idEstablecimiento) === null || _c === void 0 ? void 0 : _c.toHexString(),
            // Populate
            tipoBaja: dato.tipoBaja ? AgroParserService.tipoBaja(dato.tipoBaja) : undefined,
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static bajas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.baja(dato));
        }
        return dto;
    }
    static diagnostico(dato) {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static diagnosticos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.diagnostico(dato));
        }
        return dto;
    }
    static subcategoria(dato) {
        var _a;
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            pesoMax: dato.pesoMax,
            pesoMin: dato.pesoMin,
            idCategoria: (_a = dato.idCategoria) === null || _a === void 0 ? void 0 : _a.toHexString(),
            //
            categoria: dato.categoria ? AgroParserService.categoria(dato.categoria) : undefined,
        };
    }
    static subcategorias(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.subcategoria(dato));
        }
        return dto;
    }
    static tipoTratamiento(dato) {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static tipoTratamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoTratamiento(dato));
        }
        return dto;
    }
    static tipoVacuna(dato) {
        return {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
    }
    static tipoVacunas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tipoVacuna(dato));
        }
        return dto;
    }
    static tratamiento(dato) {
        var _a, _b, _c, _d;
        const dto = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: (_a = dato.idAnimal) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idDiagnostico: (_b = dato.idDiagnostico) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idTipoTratamiento: (_c = dato.idTipoTratamiento) === null || _c === void 0 ? void 0 : _c.toHexString(),
            observaciones: dato.observaciones,
            producto: dato.producto,
            idEstablecimiento: (_d = dato.idEstablecimiento) === null || _d === void 0 ? void 0 : _d.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            diagnostico: dato.diagnostico ? AgroParserService.diagnostico(dato.diagnostico) : undefined,
            tipoTratamiento: dato.tipoTratamiento ? AgroParserService.tipoTratamiento(dato.tipoTratamiento) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static tratamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.tratamiento(dato));
        }
        return dto;
    }
    static vacunacion(dato) {
        var _a, _b, _c;
        return {
            _id: dato._id.toHexString(),
            dosis: dato.dosis,
            fecha: dato.fecha,
            idAnimal: (_a = dato.idAnimal) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idTipoVacuna: (_b = dato.idTipoVacuna) === null || _b === void 0 ? void 0 : _b.toHexString(),
            observaciones: dato.observaciones,
            producto: dato.producto,
            idEstablecimiento: (_c = dato.idEstablecimiento) === null || _c === void 0 ? void 0 : _c.toHexString(),
            //
            tipoVacuna: dato.tipoVacuna ? AgroParserService.tipoVacuna(dato.tipoVacuna) : undefined,
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static vacunaciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.vacunacion(dato));
        }
        return dto;
    }
    static eventoEspecifico(dato) {
        var _a, _b;
        return {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: (_a = dato.idAnimal) === null || _a === void 0 ? void 0 : _a.toHexString(),
            titulo: dato.titulo,
            observaciones: dato.observaciones,
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static eventosEspecificos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.eventoEspecifico(dato));
        }
        return dto;
    }
    static pesaje(dato) {
        var _a, _b;
        return {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idAnimal: (_a = dato.idAnimal) === null || _a === void 0 ? void 0 : _a.toHexString(),
            peso: dato.peso,
            observaciones: dato.observaciones,
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static pesajes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.pesaje(dato));
        }
        return dto;
    }
    static servicio(dato) {
        var _a, _b;
        return {
            _id: dato._id.toHexString(),
            fechaInicio: dato.fechaInicio,
            fechaFin: dato.fechaFin,
            idAnimal: (_a = dato.idAnimal) === null || _a === void 0 ? void 0 : _a.toHexString(),
            observaciones: dato.observaciones,
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            //
            animal: dato.animal ? AgroParserService.animal(dato.animal) : undefined,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
        };
    }
    static servicios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(AgroParserService.servicio(dato));
        }
        return dto;
    }
    //
    static sensorNivel(dato, dispositivoEspecifico) {
        var _a, _b, _c;
        return {
            _id: dato._id.toHexString(),
            activo: dato.activo,
            deveui: dato.deveui,
            fechaCreacion: (_a = dato.fechaCreacion) === null || _a === void 0 ? void 0 : _a.toISOString(),
            ubicacion: dato.ubicacion,
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idLote: (_c = dato.idLote) === null || _c === void 0 ? void 0 : _c.toHexString(),
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
    static sensoresNivel(datos, dispositivos) {
        const dto = [];
        for (const dato of datos) {
            const dispositivo = dispositivos === null || dispositivos === void 0 ? void 0 : dispositivos.find(d => dato.deveui === d.deveui);
            dto.push(AgroParserService.sensorNivel(dato, dispositivo));
        }
        return dto;
    }
    // Silobolsa
    static silobolsa(dato, lanzas, trackers, reporteLanza, reportesLanza, reporteTracker, reportesTracker) {
        var _a, _b, _c, _d;
        return {
            _id: dato._id.toHexString(),
            cosecha: dato.cosecha,
            deveuiLanzas: dato.deveuiLanzas,
            deveuiTrackers: dato.deveuiTrackers,
            especie: dato.especie,
            fechaConfeccion: (_a = dato.fechaConfeccion) === null || _a === void 0 ? void 0 : _a.toISOString(),
            idEstablecimiento: (_b = dato.idEstablecimiento) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idLote: (_c = dato.idLote) === null || _c === void 0 ? void 0 : _c.toHexString(),
            metros: dato.metros,
            numero: dato.numero,
            producto: dato.producto,
            activa: dato.activa,
            fechaDesmantelacion: (_d = dato.fechaDesmantelacion) === null || _d === void 0 ? void 0 : _d.toISOString(),
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
    static silobolsas(datos, lanzas, trackers) {
        const dto = [];
        for (const dato of datos) {
            const lanzasSilo = lanzas === null || lanzas === void 0 ? void 0 : lanzas.filter(d => dato.deveuiLanzas.includes(d.deveui));
            const trackersSilo = trackers === null || trackers === void 0 ? void 0 : trackers.filter(d => dato.deveuiTrackers.includes(d.deveui));
            dto.push(AgroParserService.silobolsa(dato, lanzasSilo, trackersSilo));
        }
        return dto;
    }
    // Correctoras
    static correctora(dato, dispositivo) {
        var _a, _b;
        return {
            _id: dato._id.toHexString(),
            bateria: dato.bateria,
            fechaAsignacion: dato.fechaAsignacion.toISOString(),
            deveui: dato.deveui,
            firmware: dato.firmware,
            modelo: dato.modelo,
            numeroSerie: dato.numeroSerie,
            idEstablecimiento: (_a = dato.idEstablecimiento) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idLote: (_b = dato.idLote) === null || _b === void 0 ? void 0 : _b.toHexString(),
            activa: dato.activa,
            ubicacion: dato.ubicacion,
            //
            dispositivo,
            establecimiento: dato.establecimiento ? AgroParserService.establecimiento(dato.establecimiento) : undefined,
            lote: dato.lote ? AgroParserService.lote(dato.lote) : undefined,
        };
    }
    static correctoras(datos, dispositivos) {
        const dto = [];
        for (const dato of datos) {
            const dispositivo = dispositivos === null || dispositivos === void 0 ? void 0 : dispositivos.find(d => d.deveui === dato.deveui);
            dto.push(AgroParserService.correctora(dato, dispositivo));
        }
        return dto;
    }
    // Otras funciones
    static horasAHexa(horas) {
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
    static hexaAHoras(hexa) {
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
    static getBateria(cantReportesDiarios, mensajesEnviados) {
        if (!cantReportesDiarios && mensajesEnviados) {
            return Math.trunc(100 - (mensajesEnviados * 100 / 9984));
        }
        else {
            if (mensajesEnviados) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                return Math.trunc(100 - (mensajesEnviados * 100 / reportesPorFrecuencia[cantReportesDiarios - 1]));
            }
            else {
                return;
            }
        }
    }
    static getDuracion(cantReportesDiarios, mensajesEnviados) {
        if (!cantReportesDiarios && mensajesEnviados) {
            const reportesRestantes = 9984 - mensajesEnviados;
            const diasRestantes = Math.trunc(reportesRestantes / 96);
            const date = new Date();
            date.setDate(date.getDate() + diasRestantes);
            return date.toString();
        }
        else {
            if (mensajesEnviados) {
                // tslint:disable-next-line: max-line-length
                const reportesPorFrecuencia = [1681, 2899, 3823, 4547, 5125, 5610, 6006, 6352, 6642, 6900, 7117, 7321, 7488, 7644, 7800, 7920, 8041, 8136, 8246, 8320, 8421, 8492, 8556, 8638];
                const reportesRestantes = reportesPorFrecuencia[cantReportesDiarios - 1] - mensajesEnviados;
                const diasRestantes = Math.trunc(reportesRestantes / cantReportesDiarios);
                const date = new Date();
                date.setDate(date.getDate() + diasRestantes);
                return date.toString();
            }
            else {
                return;
            }
        }
    }
    static getDescripcionAlerta(codigo) {
        const alertas = {
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
exports.AgroParserService = AgroParserService;
