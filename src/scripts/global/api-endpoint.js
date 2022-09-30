/* eslint-disable import/extensions */
import CONFIG from './config.js';

// eslint-disable-next-line no-unused-vars
const API_ENDPOINT = {
  GENRES: `${CONFIG.BASE_URL}/genre/movie/list?api_key=${CONFIG.API_KEY}`,
  TRENDING: `${CONFIG.BASE_URL}/trending/movie/week?api_key=${CONFIG.API_KEY}`,
  SEARCH: (keyword) => `${CONFIG.BASE_URL}/search/movie?api_key=${CONFIG.API_KEY}&query=${keyword}`,
  DISCOVER: `${CONFIG.BASE_URL}/discover/movie?api_key=${CONFIG.API_KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/movie/${id}?api_key=${CONFIG.API_KEY}&append_to_response=videos,images&include_image_language=en,null`,
};

export default API_ENDPOINT;
