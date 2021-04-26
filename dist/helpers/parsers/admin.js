"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminParserService = void 0;
class AdminParserService {
    static usuario(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            idCliente: dato.idCliente.toHexString(),
            usuario: dato.usuario,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static usuarios(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.usuario(dato));
        }
        return dto;
    }
    static cliente(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            applicationServerId: dato.applicationServerId,
            nombre: dato.nombre,
            applications: dato.applications,
            gateways: dato.gateways,
            networkServerId: dato.networkServerId,
            organizationId: dato.organizationId,
            serviceProfileId: dato.serviceProfileId
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static clientes(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.cliente(dato));
        }
        return dto;
    }
    static aplicacion(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            urlsApiAplicacion: dato.urlsApiAplicacion,
            urlsApiEntrada: dato.urlsApiEntrada,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static aplicaciones(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.aplicacion(dato));
        }
        return dto;
    }
    static applicationServer(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
            config: dato.config,
            tipo: dato.tipo,
            url: dato.url,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static applicationServers(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.applicationServer(dato));
        }
        return dto;
    }
    static dispositivoAdmin(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            applicationServerId: dato.applicationServerId,
            applicationId: dato.applicationId,
            deveui: dato.deveui,
            deviceName: dato.deviceName,
            deviceProfileId: dato.deviceProfileId,
            idCliente: dato.idCliente.toHexString(),
            idLote: dato.idCliente.toHexString(),
            tipo: dato.tipo,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static dispositivosAdmin(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.dispositivoAdmin(dato));
        }
        return dto;
    }
    static loteDispositvo(dato) {
        var _a;
        const dto = {
            _id: (_a = dato._id) === null || _a === void 0 ? void 0 : _a.toHexString(),
            nombre: dato.nombre,
        };
        Object.keys(dto).forEach(key => !dto[key] ? delete dto[key] : {});
        return dto;
    }
    static lotesDispositvo(datos) {
        const dto = [];
        for (const dato of datos) {
            dto.push(this.loteDispositvo(dato));
        }
        return dto;
    }
}
exports.AdminParserService = AdminParserService;
