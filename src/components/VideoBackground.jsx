
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
 const trailerKey=useMovieTrailer(movieId);
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
