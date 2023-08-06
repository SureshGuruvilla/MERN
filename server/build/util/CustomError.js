"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError {
    constructor(error) {
        error.statusCode = error.statusCode || 500;
        error.message = error.message || "Error occured";
        return error;
    }
}
exports.default = CustomError;
