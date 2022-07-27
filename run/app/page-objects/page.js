class Page {

    open(baseUrl) {
        return browser.url(baseUrl);
      }
}

module.exports = Page;