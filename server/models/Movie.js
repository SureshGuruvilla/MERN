import mongoose from "mongoose";
const Schema = mongoose.Schema;

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

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
