import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { fetchMovieById } from "../api/MoviesAPI";
import MovieModel from "../models/MovieModel";

export const fetchMoviesByIdAsyncThunk = createAsyncThunk(
    'movie/getMovieByIdList',
    (id:string) => {
      return fetchMovieById(id)
    }
  )

interface MovieSlice{
movies: MovieModel[];
isLoading: boolean;
notFound: boolean;
}
const initialState:MovieSlice={
movies: [],
isLoading: true,
notFound: false
}
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder.addCase(fetchMoviesByIdAsyncThunk.pending, (state, _action) => {
        state.isLoading = true
        state.movies = [...state.movies]
        state.notFound= false
      })
      builder.addCase(fetchMoviesByIdAsyncThunk.fulfilled, (state, action) => {
        const newArray:MovieModel[] = [...state.movies,action.payload]
        state.movies = newArray
        state.isLoading = false
        state.notFound= false
      })
      builder.addCase(fetchMoviesByIdAsyncThunk.rejected, (state, _action) => {
        state.isLoading = false
        state.movies = [...state.movies]
        state.notFound= true
      })
    },
  })

  export const {  } = movieSlice.actions

  export default movieSlice.reducer