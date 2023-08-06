"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Movie_1 = __importDefault(require("../models/Movie"));
const CustomError_1 = __importDefault(require("../util/CustomError"));
const HandleAsyncError_1 = __importDefault(require("../util/HandleAsyncError"));
const router = express_1.default.Router();
router.get("/", (0, HandleAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield Movie_1.default.find();
    res.status(200).json(movies);
})));
router.get("/:id", (0, HandleAsyncError_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = yield Movie_1.default.findById(req.params.id);
    if (!movie) {
        const error = new CustomError_1.default({
            statusCode: 400,
            message: "No data found",
        });
        next(error);
    }
    res.status(200).json(movie);
})));
router.post("/new", (0, HandleAsyncError_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movie = new Movie_1.default({
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        thumbnail: req.body.thumbnail,
        originalUrl: req.body.originalUrl,
    });
    yield movie.save();
    res.status(200).json(movie);
})));
exports.default = router;
