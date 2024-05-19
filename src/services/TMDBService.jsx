import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZmNTBkNjU1NWQ2YTRkY2E3ZWUyMGEzZjg5MDk3YSIsInN1YiI6IjY2NDlmZGY5ZmY5ZWY4OTI4MjhlY2MzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZtnO6Ur-nh2c9Ty1adScCEv8MnO9eRDCCRsXPpH4y0U";

export const getTrendingMovies = (onSuccess, onError) => {
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

export const searchMovie = (query, onSuccess, onError) => {
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

export const getMovieDetails = (movieId, onSuccess, onError) => {
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

export const getMovieCredits = (movieId, onSuccess, onError) => {
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

export const getMovieReviews = (movieId, onSuccess, onError) => {
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
