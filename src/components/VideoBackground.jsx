import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);
  const trailerKey = movieTrailer?.key;
  console.log("trailer key", trailerKey);
  const getMovieVideos = async () => {
    const clips = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await clips.json();

    const filterData = data.results.filter((clip) => clip.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    console.log("clips", typeof yt_key, trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div className="w-screen">
      <iframe
        width="100%"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerKey}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
("8B1EtVPBSMw");
