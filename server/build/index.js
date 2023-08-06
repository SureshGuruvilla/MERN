"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./db/db"));
const cors_1 = __importDefault(require("cors"));
const HandleGlobalError_1 = __importDefault(require("./util/HandleGlobalError"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
//configure dotenv
dotenv_1.default.config();
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static("public"));
app.use("/images", express_1.default.static("images"));
//connect to db
(0, db_1.default)();
//connect routers
(0, routes_1.default)(app);
// handleGlobalError
(0, HandleGlobalError_1.default)(app);
// listen to port
const port = process.env.PORT_NO || 3000;
app.listen(port, () => console.log(`App listening on ${port}`));
