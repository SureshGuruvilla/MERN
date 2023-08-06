"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function dbConnect() {
    const connectionString = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.n0piyuc.mongodb.net/?retryWrites=true&w=majority`;
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default
        .connect(connectionString)
        .then(() => {
        console.log("Mangodb connected");
    })
        .catch((err) => {
        console.error(err);
    });
}
exports.default = dbConnect;
