const Page = require('./page');

class LoginPage extends Page {

    get loginDropdown() {
        return $('html > body > div:nth-of-type(1) > header > div > div > div:nth-of-type(2) > div:nth-of-type(3) > button > i');
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

    async loginUser(user) {
        await this.loginDropdown.click();
        await this.loginLink.click();
        await this.emailInput.setValue(user.email);
        await this.passwordInput.setValue(user.password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();