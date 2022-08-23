import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { LeftBlock, RightBlock, Header, Banner, MainHomeFilms } from '../components';
import { getHomeMovies, getMovieBannerInfo } from '../services/home';

function HomeContainer() {
  const [currentTab, setCurrentTab] = useState('tv');
  const {
    data: dataMovie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie
  } = useQuery(['home-movies'], getHomeMovies);

  const {
    data: dataMovieDetail,
    isLoading: isLoadingMovieDetail,
    isError: isErrorMovieDetail,
    error: errorMovieDetail
  } = useQuery(
    ['detailMovies', dataMovie?.Trending],
    () => getMovieBannerInfo(dataMovie?.Trending),
    {
      enabled: !!dataMovie?.Trending
    }
  );
  return (
    <div className="min-h-screen bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <LeftBlock />
        <div className="col-span-8 p-3">
          <Header />
          <Banner handleTab={setCurrentTab} currentTab={currentTab} />
          {currentTab === 'movie' && <MainHomeFilms dataMovie={dataMovie} />}
          {currentTab === 'tv' && <MainHomeFilms dataMovie={dataMovie} />}
        </div>
        <RightBlock />
      </div>
    </div>
  );
}

export default HomeContainer;
