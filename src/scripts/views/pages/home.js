import TheMovieDbSource from '../../data/tmdb-api-request';
import {
  createBannerMovieItemTemplate,
  createGenreItemFilterTemplate,
  createMovieItemTemplate,
} from '../templates/template-creator';
import { runSwiper, SWIPER_EVENT } from '../../utils/swiper-init';

const Home = {
  async render() {
    return `
      <section id="home" class="home">
        <div class="filter-content genres" id="genres">
          <div class="genres-inner">
            <div class="genres-list-filter">
              
            </div>
          </div>
        </div>
        <div class="movies-content">
          <section class="banner" id="banner">
            <div class="swiper mySwiper">
              <div data-banner-container class="swiper-wrapper">
                
              </div>
              <div class="swiper-button-next banner-next-btn"></div>
              <div class="swiper-button-prev banner-prev-btn"></div>
            </div>
          </section>
          <section id="all-movies" class="all-movies">
            <div class="container">
              <h2>All Genre</h2>
              <div class="all-movies-list">
                
              </div>
            </div>
          </section>
        </div>
      </section>
    `;
  },

  async loadPageContent() {
    const genresMovies = await TheMovieDbSource.getGenres();
    const trendingMovies = await TheMovieDbSource.getTrendingMovies();
    const allMovies = await TheMovieDbSource.getDiscover();

    const genresListFilter = document.querySelector('.genres-list-filter');
    const bannerMoviesContainer = document.querySelector('[data-banner-container]');
    const allMoviesList = document.querySelector('.all-movies-list');

    genresListFilter.innerHTML = '';
    bannerMoviesContainer.innerHTML = '';
    allMoviesList.innerHTML = '';

    this._renderElements({
      dataMovies: [{
        id: 'all',
        name: 'all',
      }, ...genresMovies],
      templateElementCreator: createGenreItemFilterTemplate,
      containerElement: genresListFilter,
    });

    this._renderElements({
      dataMovies: trendingMovies,
      templateElementCreator: createBannerMovieItemTemplate,
      containerElement: bannerMoviesContainer,
    });

    this._renderElements({
      dataMovies: allMovies,
      templateElementCreator: createMovieItemTemplate,
      containerElement: allMoviesList,
    });

    document.addEventListener(SWIPER_EVENT, runSwiper);
    document.dispatchEvent(new Event(SWIPER_EVENT));

    const genreFilterItems = genresListFilter.querySelectorAll('.genre');
    genresListFilter.addEventListener('click', async (event) => {
      document.removeEventListener(SWIPER_EVENT, runSwiper);
      const isGenreFilterItem = event.target.classList.contains('genre');
      if (isGenreFilterItem) {
        genreFilterItems.forEach((item) => {
          item.classList.remove('highlight');
        });

        const genreFilterItem = event.target;

        genreFilterItem.classList.add('highlight');
        await this._genresFilterActionHandler(genreFilterItem);
      }
    });
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

  async _genresFilterActionHandler(genreItem) { /* element */
    const moviesContent = document.querySelector('.movies-content');
    let moviesListContainer = null;
    let moviesFiltered = null;

    moviesContent.innerHTML = '';
    if (genreItem.dataset.genreName === 'all') {
      moviesContent.innerHTML = `
        <section class="banner" id="banner">
          <div class="swiper mySwiper">
            <div data-banner-container class="swiper-wrapper">
              
            </div>
            <div class="swiper-button-next banner-next-btn"></div>
            <div class="swiper-button-prev banner-next-btn"></div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
        <section id="all-movies" class="all-movies">
          <div class="container">
            <h2>All Genre</h2>
            <div class="all-movies-list">
              
            </div>
          </div>
        </section>
      `;

      moviesListContainer = moviesContent.querySelector('.all-movies-list');
      const bannerMoviesContainer = moviesContent.querySelector('[data-banner-container]');

      moviesFiltered = await TheMovieDbSource.getDiscover();
      const trendingMovies = await TheMovieDbSource.getTrendingMovies();

      this._renderElements({
        dataMovies: trendingMovies,
        templateElementCreator: createBannerMovieItemTemplate,
        containerElement: bannerMoviesContainer,
        isAsync: true,
      });

      document.addEventListener(SWIPER_EVENT, runSwiper);
      document.dispatchEvent(new Event(SWIPER_EVENT));
    } else {
      moviesContent.innerHTML = `
      <section id="filtered-movies" class="filtered-movies">
        <div class="container">
          <h2>${genreItem.dataset.genreName} Genre</h2>
          <div class="filtered-movies-list">
            
          </div>
        </div>
      </section>
      `;

      moviesListContainer = moviesContent.querySelector('.filtered-movies-list');
      moviesFiltered = await TheMovieDbSource.filterMoviesWithGenres(genreItem.id);
    }

    this._renderElements({
      dataMovies: moviesFiltered,
      templateElementCreator: createMovieItemTemplate,
      containerElement: moviesListContainer,
    });
  },
};

export default Home;
