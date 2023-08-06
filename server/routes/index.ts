import { Express } from 'express';
import movieRoute from './Movie';

export default function configureRoutes(app:Express){
    app.use("/movie",movieRoute);
}