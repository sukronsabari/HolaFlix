import urlHashParser from '../routes/url-hash-parser';
import routes from '../routes/routes';
import topBarInitiator from '../utils/top-bar-init';
import Search from './pages/search';

class App {
  constructor(pageContainer, navbarUtils) {
    this._pageContainer = pageContainer;
    this._hamburgerBtn = navbarUtils.hamburgerBtn;
    this._btnSearchOpener = navbarUtils.btnSearchOpener;
    this._btnSearchCloser = navbarUtils.btnSearchCloser;
    this._searchInput = navbarUtils.searchInput;

    this.initApp();
  }

  initApp() {
    topBarInitiator.init({
      hamburgerBtn: this._hamburgerBtn,
      btnSearchOpener: this._btnSearchOpener,
      btnSearchCloser: this._btnSearchCloser,
    });
  }

  async renderPage() {
    const url = urlHashParser.parseUrlWithCombiner();
    const page = routes[url];
    this._pageContainer.innerHTML = await page.render();
    await page.loadPageContent();
  }

  async renderSearch() {
    const page = Search;
    const keyword = this._searchInput.value;

    this._pageContainer.innerHTML = await page.render();
    await page.loadPageContent(keyword);
  }
}

export default App;
