import express from "express";
import Movie from "../models/Movie";
import { Request, Response } from "express";
import CustomError from "../util/CustomError";
import handleAsyncError from "../util/HandleAsyncError";
const router = express.Router();

router.get(
  "/",
  handleAsyncError(async (req: Request, res: Response) => {
    const movies = await Movie.find();
    res.status(200).json(movies);
  })
);
router.get(
  "/:id",
  handleAsyncError(async (req: Request, res: Response, next: any) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      const error = new CustomError({
        statusCode: 404,
        message: "No data found",
      });
      next(error);
    }
    res.status(200).json(movie);
  })
);
router.post(
  "/",
  handleAsyncError(async (req: Request, res: Response) => {
    const movie = new Movie({
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      thumbnail: req.body.thumbnail,
      originalUrl: req.body.originalUrl,
    });
    await movie.save();
    res.status(200).json(movie);
  })
);
router.patch(
  "/:id",
  handleAsyncError(async (req: Request, res: Response, next: any) => {
    const movieUpdate = await Movie.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    if (movieUpdate.matchedCount !== 1) {
      const error = new CustomError({
        statusCode: 404,
        message: "No data found",
      });
      return next(error);
    }
    res.status(200).json(movieUpdate);
  })
);
export default router;
