const log = require('../utils/log');

class Page {

    open() {
      log.info('Opening Awesome-shop site');
      return browser.url('/');
    }

    maximize() {
      log.info('Maximizing window');
      return browser.maximizeWindow();
    }

    close() {
      log.info('Closing Awesome-shop site');
      return browser.closeWindow();
    }
}

module.exports = Page;