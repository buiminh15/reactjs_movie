import APIGateway from "../config/tmdb-api";

const API_KEY = "2071d391774826fe0fa07a2215d3dadb";

export default {
  fetchTrending() {
    return APIGateway.get(
      `/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
  },
  fetchNetflixOriginals() {
    return APIGateway.get(
      `/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
  },
  fetchTopRated() {
    return APIGateway.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
  },
  fetchActionMovies() {
    return APIGateway.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
  },
  fetchComedyMovies() {
    return APIGateway.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
  },
  fetchHorrorMovies() {
    return APIGateway.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
  },
  fetchRomanceMovies() {
    return APIGateway.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
  },
  fetchDocumentaries() {
    return APIGateway.get(
      `/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
  },
};
