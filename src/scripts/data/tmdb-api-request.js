import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class TheMovieDbSource {
  static async getGenres() {
    try {
      const response = await axios.get(API_ENDPOINT.GENRES);
      return response.data.genres;
    } catch (error) {
      return {
        message: 'error get genres',
      };
    }
  }

  static async getTrendingMovies() {
    try {
      const response = await axios.get(API_ENDPOINT.TRENDING);
      return response.data.results;
    } catch (error) {
      return {
        message: 'error get trending movies',
      };
    }
  }

  static async searchMovies(keyword) {
    try {
      const response = await axios.get(API_ENDPOINT.SEARCH(keyword));
      return response.data.results;
    } catch (error) {
      return {
        message: 'Movies not Found',
      };
    }
  }

  static async getDiscover() {
    try {
      const response = await axios.get(API_ENDPOINT.DISCOVER);
      return response.data.results;
    } catch (error) {
      return {
        message: 'error get all movies',
      };
    }
  }

  static async filterMoviesWithGenres(genreId) {
    try {
      const response = await axios.get(`${API_ENDPOINT.DISCOVER}&with_genres=${encodeURI(genreId)}`);
      return response.data.results;
    } catch (error) {
      return {
        message: `error get movies with genreId : ${genreId}`,
      };
    }
  }

  static async getDetailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default TheMovieDbSource;
