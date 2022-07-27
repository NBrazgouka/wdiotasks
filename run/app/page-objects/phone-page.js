const { default: $ } = require('webdriverio/build/commands/element/$');
const Page = require('./page');

class PhonePage extends Page {

    get openPhone() {
        return $('=iPhone');
    }

    get couponToggle() {
        return $('#accordion a.accordion-toggle[href*="#collapse-coupon"]');
    }

    get couponInput() {
        return $('#input-coupon');
    }

    get applyCouponButton() {
        return $('#button-coupon');
    }

    get checkoutButton() {
        return $('#content > div.buttons.clearfix > div.pull-right > a');
    }

    get newAddressButton() {
        return $('label=I want to use a new address');
    }

    get inputFirstName() {
        return $('#input-payment-firstname');
    }

    get inputLastName() {
        return $('#input-payment-lastname');
    }

    get inputAddress1() {
        return $('#input-payment-address-1');
    }

    get inputCity() {
        return $('#input-payment-city');
    }

    get countryDropdown() {
        return $('#input-payment-country');
    }

    get belarusValue() {
        return $('//select[@id = "input-payment-country"]//option[@value = 20]');
    }

    get regionDropdown() {
        return $('#input-payment-zone');
    }

    get minskValue() {
        return $('//select[@id = "input-payment-zone"]//option[@value = 339]');
    }

    get continueButton1() {
        return $('#button-payment-address');
    }

    get existingAddressButton() {
        return $('label=I want to use an existing address');
    }

    get continueButton2() {
        return $('#button-shipping-address');
    }

    get commentInput() {
        return $('#collapse-shipping-method > div > p:nth-child(5) > textarea');
    }

    get continueButton3() {
        return $('#button-shipping-method');
    }

    get paymentMethodButton() {
        return $('#collapse-payment-method > div > div:nth-child(3) > label');
    }

    get conditionCheckbox() {
        return $('#collapse-payment-method > div > div.buttons > div > input[type=checkbox]:nth-child(2)');
    }

    get continueButton4() {
        return $('#button-payment-method');
    }

    get confirmButton() {
        return $('#button-confirm');
    }

    open() {
        return super.open('/');
    }

    async openPhonePage() {
        await this.openPhone.click();
    }

    async openCouponToggle() {
        await this.couponToggle.click();
    }

    async applyCoupon(value) {
        await this.couponInput.setValue(value);
        await this.applyCouponButton.click();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async fillFormWithNewAddress(firstname, lastname, street, city) {
        await this.newAddressButton.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputAddress1.setValue(street);
        await this.inputCity.setValue(city);
        await this.countryDropdown.click();
        await this.belarusValue.click();
        await this.regionDropdown.click();
        await this.minskValue.click();
        await this.continueButton1.click();
    }

    async continueWithExistingAddress() {
        await this.existingAddressButton.click();
        await this.continueButton2.click();
    }

    async continueWithComment(value) {
        await this.commentInput.setValue(value);
        await this.continueButton3.click();
    }

    async continueWithCashDeliveryMethodTermsCheckbox() {
        await this.paymentMethodButton.click();
        await this.conditionCheckbox.click();
        await this.continueButton4.click();
    }

    async confirmOrder() {
        await this.confirmButton.click();
    }

}

module.exports = new PhonePage();