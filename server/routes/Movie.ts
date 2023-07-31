import express from "express";
import Movie from "../models/Movie";

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    console.log("Error:", error);

    res.status(500);
  }
});
router.get("/:id", async (req: any, res: any) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if(movie) res.status(200).json(movie);
    else res.status(404)
  } catch (error) {
    console.log("Error:", error);

    res.status(500);
  }
});
router.post("/new", async (req: any, res: any) => {
  try {
    const movie = new Movie({
      name: req.body.name,
      description: req.body.description,
      rating: req.body.rating,
      thumbnail: req.body.thumbnail,
      originalUrl: req.body.originalUrl,
    });
    movie.save();
    res.status(200).json(movie);
  } catch (error) {
    console.log("Error:", error);

    res.status(500);
  }
});

export default router;
