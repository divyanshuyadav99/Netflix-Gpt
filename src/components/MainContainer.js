import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'
const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) {
        return(
            <div>Sorry</div>
        )
    };
    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview = {overview}></VideoTitle>
        <VideoBackground movieId={id}></VideoBackground>
    </div>
  )
}

export default MainContainer