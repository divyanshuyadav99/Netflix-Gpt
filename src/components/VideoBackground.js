import React from "react";
import { useSelector } from "react-redux";
import  useTrailerVideo from "../hooks/useTrailerVideo"
const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies.trailerVideo);
  useTrailerVideo(movieId)
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video h-screen"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        frameborder="0"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
