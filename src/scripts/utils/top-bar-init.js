const topBarInitiator = {
  init({ hamburgerBtn, btnSearchOpener, btnSearchCloser }) {
    btnSearchOpener.addEventListener('click', () => {
      document.querySelector('.search-field').classList.add('open-search-field');
    });

    btnSearchCloser.addEventListener('click', () => {
      document.querySelector('.search-field').classList.remove('open-search-field');
      const searchInput = document.querySelector('#search');
      if (searchInput.value === '') {
        return;
      } else {
        document.dispatchEvent(new Event('RENDER-HOME-PAGE'));
      }
      searchInput.value = '';
    });

    hamburgerBtn.addEventListener('click', () => {
      document.querySelector('aside.navbar-link').classList.toggle('open-navbar-link');
    });
  },
};

export default topBarInitiator;
