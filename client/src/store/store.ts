import { configureStore } from '@reduxjs/toolkit'
import MoviesSlice from './MoviesSlice'
import MovieSlice from './MovieSlice'

const store = configureStore({
  reducer: {
    movies: MoviesSlice,
    movie: MovieSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store