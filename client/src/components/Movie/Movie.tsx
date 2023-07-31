import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesByIdAsyncThunk } from "../../store/MovieSlice";
import { RootState } from "../../store/store";
import { useParams } from "react-router-dom";
import MovieModel from "../../models/MovieModel";
import "./Movie.css";
import Image from "../utils/Image/Image";
import Ratings from "../Ratings/Ratings";

function Movie() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { id } = useParams();
  const { movies, isLoading, notFound } = useSelector(
    (state: RootState) => state.movie
  );
  const [movie, setMovie] = useState<MovieModel>();
  const [callDispatcher, setCallDispatcher] = useState<boolean>(false);

  useEffect(() => {
    const _movie = movies.filter((it) => it._id === id)[0];
    if (_movie) {
      setMovie(_movie);
    } else {
      setCallDispatcher(true);
    }
  }, [movies]);
  useEffect(() => {
    if (callDispatcher) {
      dispatch(fetchMoviesByIdAsyncThunk(id!));
    }
  }, [callDispatcher]);

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (notFound) {
    return <div>...No data found</div>;
  }
  return (
    <div className="single-movie">
      <Image src={movie?.originalUrl!} alt={movie?.name!} />
      <div className="content">
        <div className="name">{movie?.name}</div>
        <Ratings count={movie?.rating!} />
        <div className="desc">{movie?.description}</div>
      </div>
    </div>
  );
}

export default Movie;
