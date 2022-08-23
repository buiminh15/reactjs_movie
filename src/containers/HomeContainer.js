import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MainComponent, LeftBlock, RightBlock } from '../components';
import { getHomeMovies } from '../services/home';

function HomeContainer() {
  const {
    data: dataMovie,
    isLoading: isLoadingMoviem,
    isError: isErrorMovie,
    error: errorMovie
  } = useQuery(['home-movies'], getHomeMovies);
  console.log("data: ", dataMovie)
  
  return (
    <div className="min-h-screen bg-[#1c1c1e]">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <LeftBlock />
        <MainComponent dataMovie={dataMovie}/>
        <RightBlock />
      </div>
    </div>
  );
}

export default HomeContainer;
