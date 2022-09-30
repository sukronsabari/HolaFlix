const createGenresSkeletonLoading = (numbers) => {
  let template = '';

  for (let i = 0; i < numbers; i += 1) {
    template += `
    <div class="genre skeleton">
      <span>Lorem</span>
    </div>
    `;
  }

  return template;
};

const createSkeletonHomeLoading = () => {
  let template = '';
  template += `
    <div class="genres skeleton" id="genres">
      <div class="genres-inner">
        <div class="genres-list">
          ${createGenresSkeletonLoading(10)}
        </div>
      </div>
    </div>
    <section class="banner-section">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide banner">
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <section id="all-movies" class="all-movies">
      <div class="container">
        <h2>All Movies</h2>
        <div class="all-movies-list">
          <a href="#" class="movie">
            <div class="movie-poster">
              <div class="rating">
                <i class="fa-solid fa-star"></i>
                <span>8.8</span>
              </div>
              <img class="poster-img" src="" alt="">
            </div>
            <div class="movie-info">
              <p class="title">Top Gun: Maverick</p>
              <p class="year">2021</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `;
};

export default createGenresSkeletonLoading;
