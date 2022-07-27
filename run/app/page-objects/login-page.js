const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class LoginPage extends Page {

    get loginDropdown() {
        return $('.acc-section');
    }

    get loginLink() {
        return $('=Login');
    }

    get emailInput() {
        return $('#input-email');
    }

    get passwordInput() {
        return $('#input-password');
    }

    get loginButton() {
        return $('#content > div > div:nth-child(2) > div > form > input');
    }

    open() {
        return super.open('/');
    }

    async loginUser(email, password) {
        await this.loginDropdown.click();
        await this.loginLink.click();
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();