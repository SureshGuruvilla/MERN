"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const MovieSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    originalUrl: {
        type: String,
        required: true,
    },
});
const Movie = mongoose_1.default.model("Movie", MovieSchema);
exports.default = Movie;
