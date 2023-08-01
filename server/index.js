import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/Movie.js";
import dbConnect from "./db/db.js"
import cors from 'cors';

const app = express();

//configure dotenv
dotenv.config();

//middlewares 
app.use(express.json());
app.use(cors());
// app.use(express.static('public'));
app.use('/images', express.static('images'));

//connect to db
dbConnect();

//connect routers
app.use("/movie",movieRouter);

// listen to port
const port = process.env.PORT_NO || 3000;
app.listen(port, () => console.log(`App listening on ${port}`));
