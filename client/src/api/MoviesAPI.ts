import axios from "axios";

export async function fetchMoviesList(){
    const API_URL = process.env.REACT_APP_BASE_URL+"/movie";
    const res = await axios.get(API_URL)
    return res.data;
}

export async function fetchMovieById(id:string){
    const API_URL = process.env.REACT_APP_BASE_URL+"/movie/"+id;
    const res = await axios.get(API_URL)
    return res.data;
}