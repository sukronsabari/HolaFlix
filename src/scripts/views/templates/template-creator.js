import CONFIG from '../../global/config';
import genres from '../../data/genres';

const createGenreItemFilterTemplate = (genre) => `
      <div class="genre ${genre.name === 'all' ? 'highlight' : ''}" id="${genre.id}" data-genre-name="${genre.name}">
        <span>${genre.name}</span> 
      </div>
`;

const getGenreNameWithId = (genreIds) => {
  const genreNames = [];
  genres.forEach((genre) => {
    genreIds.forEach((id) => {
      if (genre.id === id) genreNames.push(genre.name);
    });
  });

  return genreNames;
};

const createGenreNameItemTemplate = (genreIds) => {
  const genreNames = getGenreNameWithId(genreIds);
  let template = '';

  genreNames.forEach((genreName) => {
    template += `
    <div class="banner-genre">
      <span>${genreName}</span>
    </div>
    `;
  });

  return template;
};

const createBannerMovieItemTemplate = (movie) => {
  const {
    backdrop_path,
    poster_path,
    genre_ids,
    title,
  } = movie;

  let template = '';
  template += `
    <div class="swiper-slide banner-item">
      <div class="banner-background">
        <img src="${CONFIG.ORIGINAL_IMAGE_URL + backdrop_path}" alt="banner-background">
        <div class="overlay"></div>
      </div>
      <div class="banner-content">
        <div class="banner-body">
          <div class="banner-body-inner">
            <div class="banner-img">
              <img src="${CONFIG.BASE_IMAGE_URL + poster_path}" alt="poster-image">
            </div>
            <div class="banner-info">
              <h2 class="banner-title">${title}</h2>
              <div class="banner-genres">
                ${createGenreNameItemTemplate(genre_ids)}
              </div>
              <div class="banner-btn">
                <button class="watch-btn btn">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return template;
};

const createMovieItemTemplate = (movie) => {
  const {
    id,
    vote_average,
    poster_path,
    title,
    release_date,
  } = movie;

  const getYear = (stringDate) => {
    if (!stringDate) {
      return '';
    }
    const arrayDate = stringDate.split('-');
    const year = arrayDate[0];

    return year;
  };

  let template = '';
  template += `
    <a href="#" class="movie movie-card">
      <div class="card-header">
        <div class="movie-poster">
          <div class="rating">
            <i class="fa-solid fa-star"></i>
            <span>${parseFloat(vote_average)}</span>
          </div>
          <img class="poster-img" src="${CONFIG.BASE_IMAGE_URL + poster_path}" alt="${title}">
        </div>
      </div>
      <div class="card-body">
        <div class="movie-info">
          <p class="title">${title}</p>
          <p class="year">${getYear(release_date) || 'No year'}</p>
        </div>
      </div>
    </a>
  `;

  return template;
};

export {
  createBannerMovieItemTemplate,
  createGenreItemFilterTemplate,
  createMovieItemTemplate,
};
