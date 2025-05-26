import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesData }) => {
  if (!moviesData) return;
  console.log(moviesData);
  return (
    <div className="py-2">
    <h2 className="font-bold py-2">{title}</h2>
    <div className="flex overflow-x-auto hide-scrollbar">
      
      <div className="flex gap-2 ">
      { moviesData?.map((movie) => (
        <MovieCard className="flex-shrink-0" key={movie.id} posterPath={movie?.poster_path} />
      ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
