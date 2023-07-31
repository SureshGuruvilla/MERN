import React from 'react'
import MovieModel from '../../models/MovieModel'
import Image from '../utils/Image/Image';
import Ratings from '../Ratings/Ratings';
import { useNavigate } from 'react-router-dom';

interface MoviesItemProps{
  data:MovieModel
}

function MoviesItem(props:MoviesItemProps) {
  const navigate = useNavigate();
  const navigateToMovie= (id:string)=>{
    navigate("/"+id)
  }
  return (
    <div className="movie-card" onClick={()=>{navigateToMovie(props.data._id)}}>
      <Image src={props.data.thumbnail} alt={props.data.name}/>
      <div className="content">
        <div className="name">{props.data.name}</div>
        <Ratings count={props.data.rating}/>
      </div>
    </div>
  );
}

export default MoviesItem