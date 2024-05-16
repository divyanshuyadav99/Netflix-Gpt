import React, { useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* {
        Main container
          -videoBackground
          -video title
        Secondary container
          -MovieList * n
          -cards * n  
      } */}
    </div>
  );
};

export default Browse;
