const urlHashParser = {
  parseUrlWithoutCombiner() {
    const url = window.location.hash.replace('#', '');
    return this._urlSpliter(url);
  },

  parseUrlWithCombiner() {
    const url = window.location.hash.replace('#', '');
    const urlSplited = this._urlSpliter(url);
    return this._urlCombiner(urlSplited);
  },

  _urlSpliter(url) {
    const urlSplited = url.split('/'); /* ['', 'path', 'id'..] */
    const [, path, id] = urlSplited;
    return {
      path,
      id,
    };
  },

  _urlCombiner(url) {
    return (url.path ? `${url.path}` : '/') + (url.id ? '/:id' : '');
  },
};

export default urlHashParser;
