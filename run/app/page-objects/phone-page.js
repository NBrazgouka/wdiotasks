const Page = require('./page');
const log = require('../utils/log');

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

    get subTotalValue() {
        return $('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    }

    get discountValue() {
        return $('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
    }

    get messageCouponSuccess() {
        return $('.alert-success');
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

    get inputPaymentAddress() {
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

    get continuePaymentAddressButton() {
        return $('#button-payment-address');
    }

    get existingAddressButton() {
        return $('#collapse-shipping-address > div > form > div:nth-child(1) > label > input[type=radio]');
    }

    get continueShippingAddressButton() {
        return $('#button-shipping-address');
    }

    get commentInput() {
        return $('#collapse-shipping-method > div > p:nth-child(5) > textarea');
    }

    get continueShippingMethodButton() {
        return $('#button-shipping-method');
    }

    get paymentMethodButton() {
        return $('#collapse-payment-method > div > div:nth-child(3) > label');
    }

    get conditionCheckbox() {
        return $('#collapse-payment-method > div > div.buttons > div > input[type=checkbox]:nth-child(2)');
    }

    get continuePaymentMethodButton() {
        return $('#button-payment-method');
    }

    get confirmButton() {
        return $('#button-confirm');
    }

    get messageOrderPlace() {
        return $('h1');
    }

    get orderHistory() {
        return $('#content > p:nth-child(3) > a:nth-child(2)');
    }

    get orderTable() {
        return $('.table-responsive');
    }

    open() {
        return super.open('/');
    }

    async openPhonePage() {
        log.info('Opening phone page');
        await this.openPhone.click();
    }

    async openCouponToggle() {
        log.debug('Opening coupon toggle');
        await this.couponToggle.click();
    }

    async setCouponValue(coupon) {
        log.warn('Coupon value is case sensitive');
        await this.couponInput.setValue(coupon.lucky);
        await browser.keys('Tab');
        await browser.keys('Enter');
    }

    async getSubTotalValue() {
        const subtotal = await this.subTotalValue.getText();
        log.debug('Subtotal value is ' + subtotal);
        return Number(subtotal.substring(1));
    }

    async getDiscountValue() {
        const discount = await this.discountValue.getText();
        log.debug('Discount value is ' + discount);
        return -(Number(discount.substring(1)));
    }

    async getSuccessMessage() {
        const successMessage = await this.messageCouponSuccess;
        log.debug('Displaying success message');
        return successMessage.getText();
    }

    async clickCheckoutButton() {
        log.info('Clicking checkout button');
        await this.checkoutButton.click();
    }

    async fillFormWithNewAddress(user) {
        log.debug(`Filling from with new ${[user.lastname]} address`);
        await this.newAddressButton.click();
        await this.inputFirstName.setValue(user.firstname);
        await this.inputLastName.setValue(user.lastname);
        await this.inputPaymentAddress.setValue(user.street);
        await this.inputCity.setValue(user.city);
        await this.countryDropdown.click();
        await this.belarusValue.click();
        await this.regionDropdown.click();
        await this.minskValue.click();
        await this.continuePaymentAddressButton.click();
    }

    async continueWithExistingAddress() {
        log.info('Clicking Continue button after filling form with new address');
        await this.existingAddressButton.click();
        await this.continueShippingAddressButton.click();
    }

    async continueWithComment(text) {
        log.debug(`Pasting comment: ${text.comment}`);
        await this.commentInput.setValue(text.comment);
        await this.continueShippingMethodButton.click();
    }

    async continueWithCashDeliveryMethodTermsCheckbox() {
        log.debug('Continue after choosing Cash&Delivery method');
        await this.paymentMethodButton.click();
        await this.conditionCheckbox.click();
        await this.continuePaymentMethodButton.click();
    }

    async confirmOrder() {
        log.debug('Confirming order');
        await this.confirmButton.click();
    }

    async getOrderMessage() {
        const orderMessage = await this.messageOrderPlace;
        log.error('Order message is not displayed');
        return orderMessage.getText();
    }

    async orderHistoryCheck() {
        log.info('Checking order history');
        await this.orderHistory.click();
    }

}

module.exports = new PhonePage();