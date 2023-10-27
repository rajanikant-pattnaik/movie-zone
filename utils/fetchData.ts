import { MovieCard } from "@/Types";
import axios from "axios";

export const getTrendingMedias = async (type: String) => {
  try {
    const res = await axios.get(
      `${"https://api.themoviedb.org/3"}/trending/${type}/day?api_key=${"e68381b7d80e4f3f47212ca680bbacea"}&language=en-US`
    );

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTopratedMedias = async (type: String) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/top_rated?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US`
    );

    const data = await res.data;
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularMedias = async (type: String) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/popular?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US`
    );

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMoviesByGenre = async (type: String, id: Number) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/${type}?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`
    );

    const data = await res.data;

    const results = data.results;
    const resultData: [MovieCard] = results.map((item: any) => {
      return {
        image: item.backdrop_path,
        id: item.id,
        title: item.name || item.title,
      };
    });
    return resultData;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieVideosByID = async (type: String, id: Number) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US&append_to_response=videos`
    );

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieSearchResults = async (
  type: String,
  query: String
) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?api_key=e68381b7d80e4f3f47212ca680bbacea&include_adult=false&language=en-US&query=${query}`
    );

    const data = await res.data;

    const results = data.results;
    const resultData: [MovieCard] = results.map((item: any) => {
      return {
        image: item.backdrop_path,
        id: item.id,
        title: item.name || item.title,
      };
    });
    return resultData;
  } catch (e) {
    console.log(e);
  }
};

export const getTVorMovieDetailsByID = async (type: String, id: Number) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US&append_to_response=videos`
    );

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getSimilarTVorMovies = async (type: String, id: Number) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=e68381b7d80e4f3f47212ca680bbacea&language=en-US`
    );

    const data = await res.data;

    return data;
  } catch (e) {
    console.log(e);
  }
};
