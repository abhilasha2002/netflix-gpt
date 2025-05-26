import React, { useEffect } from 'react'
import Header from './Header';
import useAddNowPlayingMovies from '../hooks/useAddNowPlayingMovies';
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  useAddNowPlayingMovies();
  usePopularMovies();
  return (
    <div className='text-white'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    {/**
     * Main Container
     *  -VideoBackground
     *  - VideoTitle
     * SecondaryContainer
     *  - MoviesList*n
     *    - cards*n
     *  
     */}
    </div>
    
  )
}

export default Browse;
