import React, { useEffect } from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const Browse = () => {
  const dispatch=useDispatch();

  const getNowPlayingMovies=async()=>{
    const movies=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    const data=await movies.json();
   console.log("moviews data",data);
   dispatch(addNowPlayingMovies(data.results));
  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
  return (
    <div>
      <Header/>
    </div>
    
  )
}

export default Browse;
