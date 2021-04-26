"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICoordenadasValidation = void 0;
const joi_1 = __importDefault(require("joi"));
// import j2s from 'joi-to-swagger';
exports.ICoordenadasValidation = joi_1.default.object({
    lat: joi_1.default.number().required(),
    lng: joi_1.default.number().required(),
});
