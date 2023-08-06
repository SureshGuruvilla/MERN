import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/db";
import cors from "cors";
import handleGlobalError from "./util/HandleGlobalError";
import configureRoutes from "./routes";
const app = express();

//configure dotenv
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("/images", express.static("images"));

//connect to db
dbConnect();

//connect routers
configureRoutes(app);

// handleGlobalError
handleGlobalError(app);

// listen to port
const port = process.env.PORT_NO || 3000;
app.listen(port, () => console.log(`App listening on ${port}`));