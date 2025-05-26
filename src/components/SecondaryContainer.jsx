import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies);
  return (
    movies?.nowPlayingMovies && 
    <div className='pl-11 -mt-50 relative z-10'>
      <MovieList title={"Now Playing"} moviesData={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} moviesData={movies.popularMovies}/>
      <MovieList title={"Top Rated Movies"} moviesData={movies?.nowPlayingMovies}/>
      <MovieList title={"Comedy Movies"} moviesData={movies?.nowPlayingMovies}/>
     
    </div>
  )
}

export default SecondaryContainer
