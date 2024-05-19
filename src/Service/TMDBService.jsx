import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZmNTBkNjU1NWQ2YTRkY2E3ZWUyMGEzZjg5MDk3YSIsInN1YiI6IjY2NDlmZGY5ZmY5ZWY4OTI4MjhlY2MzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZtnO6Ur-nh2c9Ty1adScCEv8MnO9eRDCCRsXPpH4y0U";

const TMDBService = () => {
  const getTrendingMovies = (onError, onSuccess) => {
    axios
      .get("/trending/movie/week", {
        params: {
          language: "en-US",
        },
      })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });
  };

  const searchMovie = (query, onError, onSuccess) => {
    axios
      .get("/search/movie", {
        params: {
          query,
          include_adult: false,
          language: "en-US",
        },
      })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });
  };

  const getMovieDetails = (movieId, onError, onSuccess) => {
    axios
      .get(`movie/${movieId}`, {
        params: {
          language: "en-US",
        },
      })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });
  };

  const getMovieCredits = (movieId, onError, onSuccess) => {
    axios
      .get(`movie/${movieId}/credits`, {
        params: {
          language: "en-US",
        },
      })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });
  };

  const getMovieReviews = (movieId, onError, onSuccess) => {
    axios
      .get(`movie/${movieId}/reviews`, {
        params: {
          language: "en-US",
        },
      })
      .then((response) => {
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error);
      });
  };

  return {
    getTrendingMovies,
    searchMovie,
    getMovieDetails,
    getMovieCredits,
    getMovieReviews,
  };
};

export default TMDBService;
