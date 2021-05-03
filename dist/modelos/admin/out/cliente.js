"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IClienteDTOSwagger = exports.IClienteDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const application_server_1 = require("./application-server");
exports.IClienteDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    nombre: joi_1.default.string(),
    admin: joi_1.default.boolean(),
    activo: joi_1.default.boolean(),
    idApplicationServer: joi_1.default.string(),
    networkServerId: joi_1.default.string(),
    organizationId: joi_1.default.string(),
    serviceProfileId: joi_1.default.string(),
    gatewayIds: joi_1.default.array().items(joi_1.default.string()),
    //
    applicationServer: application_server_1.IApplicationServerDTOValidation,
});
exports.IClienteDTOSwagger = joi_to_swagger_1.default(exports.IClienteDTOValidation).swagger;
