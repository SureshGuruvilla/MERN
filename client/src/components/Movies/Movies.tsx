import React, { useEffect } from 'react'
import List from '../utils/List/List';
import MoviesItem from './MoviesItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchMoviesAsyncThunk } from '../../store/MoviesSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import "./Movies.css"

function Movies() {
  
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  useEffect(() => {
    dispatch(fetchMoviesAsyncThunk())
  }, [dispatch])
  const {movies,isLoading} = useSelector((state: RootState) => state.movies)
  


  const AccordionListItem = (props: any) => {
    return <MoviesItem data={props.data}/>
  };
  if(isLoading){
    return <div>...loading</div>
  }
  return (
    <div className='movies'>
      <h3>Movies List</h3>
      <List data={movies}>{AccordionListItem}</List>
    </div>
  )
}

export default Movies