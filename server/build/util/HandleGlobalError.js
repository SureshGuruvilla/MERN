"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
exports.default = (app) => {
    app.use((err, req, res, next) => {
        const _error = new CustomError_1.default(err);
        res.status(_error.statusCode).json({ error: _error });
    });
};
