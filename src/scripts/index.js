import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style.css';
import '../styles/home.css';
import 'regenerator-runtime';
import './components/footer-content-component';
import App from './views/app';

const pagesContentContainer = document.querySelector('.pages-content');
const navbarUtils = {
  hamburgerBtn: document.querySelector('.hamburger-btn'),
  btnSearchOpener: document.querySelector('.btn-search-opener'),
  btnSearchCloser: document.querySelector('.btn-search-closer'),
  searchInput: document.getElementById('search'),
};

const app = new App(pagesContentContainer, navbarUtils);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  let typingTimer = null;
  const doneTypingInterval = 1000;

  app.renderPage();

  document.addEventListener('RENDER-HOME-PAGE', () => {
    app.renderPage();
  });

  document.addEventListener('SEARCH-MOVIES', () => {
    app.renderSearch();
  });

  const input = document.getElementById('search');
  input.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (input.value) {
      typingTimer = setTimeout(() => {
        document.dispatchEvent(new Event('SEARCH-MOVIES'));
      }, doneTypingInterval);
    } else {
      document.dispatchEvent(new Event('RENDER-HOME-PAGE'));
    }
  });
});
