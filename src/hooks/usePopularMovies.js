import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {  addPopularMovies } from '../utils/moviesSlice';
import { useEffect } from "react";

//fetch the now playing movies from TMDB api and add them to redux store
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    const data = await movies.json();
    dispatch(addPopularMovies(data.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default usePopularMovies;
