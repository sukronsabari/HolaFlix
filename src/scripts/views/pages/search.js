import TheMovieDbSource from '../../data/tmdb-api-request';
import { createMovieItemTemplate } from '../templates/template-creator';

const Search = {
  async render() {
    return `
      <section id="filtered-movies" class="filtered-movies">
        <div class="container">
          <h2>Movies Result</h2>
          <div class="filtered-movies-list">
            
          </div>
        </div>
      </section>
    `;
  },

  async loadPageContent(keyword) {
    const filteredMoviesList = document.querySelector('.filtered-movies-list');
    const moviesResult = await TheMovieDbSource.searchMovies(keyword);

    if (moviesResult.length < 1) {
      filteredMoviesList.innerHTML = '<h2 class="no-result">Movies not Found</h2>';
    } else {
      this._renderElements({
        dataMovies: moviesResult,
        templateElementCreator: createMovieItemTemplate,
        containerElement: filteredMoviesList,
      });
    }
  },

  _renderElements({
    dataMovies,
    templateElementCreator,
    containerElement,
  }) {
    dataMovies.forEach((dataMovie) => {
      containerElement.innerHTML += templateElementCreator(dataMovie);
    });
  },
};

export default Search;
