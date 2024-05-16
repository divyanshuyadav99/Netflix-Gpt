import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useEffect } from "react"

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovies()
  }, [])
};

export default useTrailerVideo;
