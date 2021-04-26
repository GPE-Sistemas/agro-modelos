"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEspecie = void 0;
const mongoose_1 = require("mongoose");
exports.SEspecie = new mongoose_1.Schema({
    nombre: { type: String, required: true, unique: true },
});
