"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = __importDefault(require("./Movie"));
function configureRoutes(app) {
    app.use("/movie", Movie_1.default);
}
exports.default = configureRoutes;
