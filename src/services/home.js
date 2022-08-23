import APIGateway from '../configuration/tmdb-api';

// movie tab
export const getHomeMovies = async () => {
  const endpoints = {
    Trending: '/trending/movie/day',
    Popular: '/movie/popular',
    'Top Rated': '/movie/top_rated',
    Hot: '/trending/movie/day?page=2',
    Upcoming: '/movie/upcoming'
  };
  const responses = await Promise.all(
    Object.entries(endpoints).map((endpoint) => APIGateway.get(endpoint[1]))
  );

  const data = responses.reduce((final, current, index) => {
    final[Object.entries(endpoints)[index][0]] = current.results.map((item) => ({
      ...item,
      media_type: 'movie'
    }));

    return final;
  }, {});

  return data;
};

export const getMovieBannerInfo = async (movies) => {
  const detailResponses = await Promise.all(
    movies.map((movie) => APIGateway.get(`/movie/${movie.id}`))
  );

  const translationResponses = await Promise.all(
    movies.map((movie) => APIGateway.get(`/movie/${movie.id}/translations`))
  );

  const translations = translationResponses.map((item) =>
    item.translations
      .filter((translation) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translation.iso_639_1))
      .reduce((acc, element) => {
        if (element.iso_639_1 === 'vi') {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .map((translation) => translation.data.title)
  );

  const genres = detailResponses.map((item) => item.genres.filter((_, index) => index < 3));

  return genres.map((genre, index) => ({
    genre,
    translation: translations[index]
  }));
};

// tv tab

export const getHomeTvShow = async () => {
  const endpoints = {
    Trending: '/trending/tv/day',
    Popular: '/tv/popular',
    'Top Rated': '/tv/top_rated',
    Hot: '/trending/tv/day?page=2',
    'On Air': '/tv/on_the_air'
  }

  const responses = await Promise.all(
    Object.entries(endpoints).map((endpoint) => APIGateway.get(endpoint[1]))
  );

  const data = responses.reduce((final, current, index) => {
    final[Object.entries(endpoints)[index][0]] = current.results.map((item) => ({
      ...item,
      media_type: 'tv'
    }));

    return final;
  }, {});

  return data;
}

export const getTvBannerInfo = async (tvs) => {
  const detailResponses = await Promise.all(
    tvs.map((tv) => APIGateway.get(`/tv/${tv.id}`))
  );

  const translationResponses = await Promise.all(
    tvs.map((tv) => APIGateway.get(`/tv/${tv.id}/translations`))
  );

  const translations = translationResponses.map((item) =>
    item.translations
      .filter((translation) => ['vi', 'fr', 'ja', 'pt', 'ru', 'es'].includes(translation.iso_639_1))
      .reduce((acc, element) => {
        if (element.iso_639_1 === 'vi') {
          return [element, ...acc];
        }
        return [...acc, element];
      }, [])
      .map((translation) => translation.data.title)
  );

  const genres = detailResponses.map((item) => item.genres.filter((_, index) => index < 3));

  return genres.map((genre, index) => ({
    genre,
    translation: translations[index]
  }));
};