
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
 const trailerKey=useMovieTrailer(movieId);
  return (
    <div className="w-screen ">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerKey+"?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
("8B1EtVPBSMw");
