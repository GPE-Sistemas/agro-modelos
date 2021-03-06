"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGatewayDTOSwagger = exports.IGatewayDTOValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const joi_to_swagger_1 = __importDefault(require("joi-to-swagger"));
const shared_1 = require("../../shared");
const application_server_1 = require("./application-server");
exports.IGatewayDTOValidation = joi_1.default.object({
    _id: joi_1.default.string(),
    idApplicationServer: joi_1.default.string(),
    name: joi_1.default.string(),
    gatewayId: joi_1.default.string(),
    description: joi_1.default.string(),
    organizationId: joi_1.default.string(),
    networkServerId: joi_1.default.string(),
    coordenadas: shared_1.ICoordenadasValidation,
    gpsDiferencial: joi_1.default.boolean(),
    //
    applicationServer: application_server_1.IApplicationServerDTOValidation,
});
exports.IGatewayDTOSwagger = (0, joi_to_swagger_1.default)(exports.IGatewayDTOValidation).swagger;
