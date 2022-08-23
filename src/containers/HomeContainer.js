import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { LeftBlock, RightBlock, Header, Banner, MainHomeFilms } from '../components';
import { getHomeMovies, getHomeTvShow, getMovieBannerInfo, getTvBannerInfo } from '../services/home';
import { mergeArrays } from '../utils/functions';

function HomeContainer() {
  const [currentTab, setCurrentTab] = useState('tv');
  const [bannerData, setBannerData] = useState();
  const {
    data: dataMovie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
    error: errorMovie
  } = useQuery(['home-movies'], getHomeMovies);

  const {
    data: dataTv,
    isLoading: isLoadingTv,
    isError: isErrorTv,
    error: errorTv
  } = useQuery(['home-tv'], getHomeTvShow);

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

  const {
    data: dataTvDetail,
    isLoading: isLoadingTvDetail,
    isError: isErrorTvDetail,
    error: errorTvDetail
  } = useQuery(
    ['detailTv', dataTv?.Trending],
    () => getTvBannerInfo(dataTv?.Trending),
    {
      enabled: !!dataTv?.Trending
    }
  );

  useEffect(() => {
    if (currentTab === 'tv') {
      setBannerData(mergeArrays(dataTvDetail, dataTv?.Trending))
    }
    if (currentTab === 'movie') {
      setBannerData(mergeArrays(dataMovieDetail, dataMovie?.Trending))
    }
  }, [currentTab])

  return (
    <div className="bg-primary min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <LeftBlock />
        <div className="col-span-8 p-3">
          <Header />
          <Banner handleTab={setCurrentTab} currentTab={currentTab} bannerData={bannerData}/>
          {currentTab === 'movie' && <>
          <MainHomeFilms dataMovie={dataMovie} />
          </>}
          {currentTab === 'tv' && <MainHomeFilms dataMovie={dataTv} />}
        </div>
        <RightBlock />
      </div>
    </div>
  );
}

export default HomeContainer;
