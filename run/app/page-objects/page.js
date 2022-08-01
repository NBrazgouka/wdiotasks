class Page {

    open() {
        return browser.url('/');
      }

    maximize() {
      return browser.maximizeWindow();
    }

    close() {
      return browser.closeWindow();
    }
}

module.exports = Page;