"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgroParserService = void 0;
class AgroParserService {
    static especie(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static especies(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.especie(dato));
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
            especie: dato.especie ? this.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static razas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.raza(dato));
        }
        return dto;
    }
    static categoria(dato) {
        var _a;
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEspecie: (_a = dato.idEspecie) === null || _a === void 0 ? void 0 : _a.toHexString(),
            sexo: dato.sexo,
            edadMaxMeses: dato.edadMaxMeses,
            edadMinMeses: dato.edadMinMeses,
            //
            especie: dato.especie ? this.especie(dato.especie) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static categorias(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.categoria(dato));
        }
        return dto;
    }
    static animal(dato, vacunaciones, tratamientos, eventosEspecificos, pesajes, servicios, madre, padre) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const dto = {
            _id: dato._id.toHexString(),
            caravana: dato.caravana,
            deveuiDispositivo: dato.deveuiDispositivo,
            dientes: dato.dientes,
            fechaAlta: dato.fechaAlta,
            fechaNacimiento: dato.fechaNacimiento,
            foto: dato.foto,
            idBaja: (_a = dato.idBaja) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idCategoria: (_b = dato.idCategoria) === null || _b === void 0 ? void 0 : _b.toHexString(),
            idCorral: (_c = dato.idCorral) === null || _c === void 0 ? void 0 : _c.toHexString(),
            idEspecie: (_d = dato.idEspecie) === null || _d === void 0 ? void 0 : _d.toHexString(),
            idEstablecimiento: (_e = dato.idEstablecimiento) === null || _e === void 0 ? void 0 : _e.toHexString(),
            idGrupos: (_f = dato.idGrupos) === null || _f === void 0 ? void 0 : _f.map(e => e.toHexString()),
            idLote: (_g = dato.idLote) === null || _g === void 0 ? void 0 : _g.toHexString(),
            idMadre: (_h = dato.idMadre) === null || _h === void 0 ? void 0 : _h.toHexString(),
            idPadre: (_j = dato.idPadre) === null || _j === void 0 ? void 0 : _j.toHexString(),
            idSubcategoria: (_k = dato.idSubcategoria) === null || _k === void 0 ? void 0 : _k.toHexString(),
            idRaza: (_l = dato.idRaza) === null || _l === void 0 ? void 0 : _l.toHexString(),
            sexo: dato.sexo,
            // Populate
            baja: dato.baja ? this.baja(dato.baja) : undefined,
            categoria: dato.categoria ? this.categoria(dato.categoria) : undefined,
            corral: dato.corral ? this.corral(dato.corral) : undefined,
            especie: dato.especie ? this.especie(dato.especie) : undefined,
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
            grupos: ((_m = dato.grupos) === null || _m === void 0 ? void 0 : _m.length) ? this.grupos(dato.grupos) : undefined,
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
        Object.keys(dto).forEach(key => dto[key] === undefined ? delete dto[key] : {});
        return dto;
    }
    static animales(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.animal(dato));
        }
        return dto;
    }
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
            dto.push(this.tipoBaja(dato));
        }
        return dto;
    }
    static baja(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            fecha: dato.fecha,
            idTipoBaja: dato.idTipoBaja,
            observaciones: dato.observaciones,
            // Populate
            tipoBaja: dato.tipoBaja ? this.tipoBaja(dato.tipoBaja) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static bajas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.baja(dato));
        }
        return dto;
    }
    static corral(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            color: dato.color,
            coordenadas: dato.coordenadas,
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static corrales(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.corral(dato));
        }
        return dto;
    }
    static loteAnimal(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static lotesAnimales(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.loteAnimal(dato));
        }
        return dto;
    }
    static grupo(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            idEstablecimiento: dato.idEstablecimiento,
            //
            establecimiento: dato.establecimiento ? this.establecimiento(dato.establecimiento) : undefined,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static grupos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.grupo(dato));
        }
        return dto;
    }
    static establecimiento(dato) {
        var _a;
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre,
            coordenadas: (_a = dato.coordenadas) === null || _a === void 0 ? void 0 : _a.map(c1 => c1 === null || c1 === void 0 ? void 0 : c1.map(c2 => c2)),
        };
        return dto;
    }
    static establecimientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.establecimiento(dato));
        }
        return dto;
    }
    static diagnostico(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static diagnosticos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.diagnostico(dato));
        }
        return dto;
    }
    static subcategoria(dato) {
        const dto = {
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
    static subcategorias(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.subcategoria(dato));
        }
        return dto;
    }
    static tipoTratamiento(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static tipoTratamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.tipoTratamiento(dato));
        }
        return dto;
    }
    static tipoVacuna(dato) {
        const dto = {
            _id: dato._id.toHexString(),
            nombre: dato.nombre
        };
        return dto;
    }
    static tipoVacunas(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.tipoVacuna(dato));
        }
        return dto;
    }
    static tratamiento(dato) {
        const dto = {
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
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static tratamientos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.tratamiento(dato));
        }
        return dto;
    }
    static vacunacion(dato) {
        const dto = {
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
    static vacunaciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.vacunacion(dato));
        }
        return dto;
    }
    static eventoEspecifico(dato) {
        const dto = {
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
    static eventosEspecificos(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.eventoEspecifico(dato));
        }
        return dto;
    }
    static pesaje(dato) {
        const dto = {
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
    static pesajes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.pesaje(dato));
        }
        return dto;
    }
    static servicio(dato) {
        const dto = {
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
    static servicios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.servicio(dato));
        }
        return dto;
    }
    //
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
                const bateria = Math.trunc(100 - (mensajesEnviados * 100 / reportesPorFrecuencia[cantReportesDiarios - 1]));
                return bateria;
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
            73: 'Desplazamiento rápido',
        };
        let desc = alertas[codigo];
        if (!desc) {
            desc = 'Alerta no identificada';
        }
        return desc;
    }
}
exports.AgroParserService = AgroParserService;
