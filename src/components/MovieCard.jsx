import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <div className="w-44 ">
        <img
          className="rounded"
          src={IMG_CDN_URL + posterPath}
          alt="movie-poster"
        />
      </div>
    </div>
  );
};

export default MovieCard;
