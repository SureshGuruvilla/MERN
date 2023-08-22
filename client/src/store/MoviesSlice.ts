import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import MovieModel from '../models/MovieModel';
import { fetchMoviesList } from '../api/MoviesAPI';

export const fetchMoviesAsyncThunk = createAsyncThunk(
  'movie/getMovies',
  () => {
    return fetchMoviesList()
  }
)

interface MoviesSlice{
  movies: MovieModel[];
  isLoading: boolean;
}
const initialState:MoviesSlice={
  movies: [],
  isLoading: true,
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers: (builder:any) => {
    builder.addCase(fetchMoviesAsyncThunk.pending, (state:any, _action:any) => {
      state.isLoading = true
      state.movies = []
    })
    builder.addCase(fetchMoviesAsyncThunk.fulfilled, (state:any, action:any) => {
      state.movies = action.payload
      state.isLoading = false
    })
    builder.addCase(fetchMoviesAsyncThunk.rejected, (state:any, _action:any) => {
      state.isLoading = false
      state.movies = []
    })
  },
})

export const {  } = moviesSlice.actions

export default moviesSlice.reducer