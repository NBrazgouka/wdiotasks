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
        return $('label=I want to use an existing address');
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
        await this.openPhone.click();
    }

    async openCouponToggle() {
        await this.couponToggle.click();
    }

    async setCouponValue(value) {
        await this.couponInput.setValue(value);
    }

    async focusApplyCoupon() {
        await browser.executeAsync("Focus Apply Coupon"),
            function() {
                const couponInputField = this.couponInput;
                couponInputField.addEventListener('keydown', (event) => {
                    if (event.keyCode == 9) {
                        return applyCouponButton.focus();
                    }
                })
            }
    }

    async clickApplyCoupon() {
        await browser.executeAsync("Click Apply Coupon"),
            function() {
                const applyCoupon = this.applyCouponButton;
                applyCoupon.addEventListener('keydown', (event) => {
                    if (event.keyCode == 13) {
                        return applyCouponButton.click();
                    }
                })
            }
    }

    async getSubTotalValue() {
        const subtotal = await this.subTotalValue;
        return Number(subtotal.getText());
    }

    async getDiscountValue() {
        const discount = await this.discountValue;
        return Number(discount.getText());
    }

    async getSuccessMessage() {
        const successMessage = await this.messageCouponSuccess;
        return successMessage.getText();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async fillFormWithNewAddress(firstname, lastname, street, city) {
        await this.newAddressButton.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPaymentAddress.setValue(street);
        await this.inputCity.setValue(city);
        await this.countryDropdown.click();
        await this.belarusValue.click();
        await this.regionDropdown.click();
        await this.minskValue.click();
        await this.continuePaymentAddressButton.click();
    }

    async continueWithExistingAddress() {
        await this.existingAddressButton.click();
        await this.continueShippingAddressButton.click();
    }

    async continueWithComment(value) {
        await this.commentInput.setValue(value);
        await this.continueShippingMethodButton.click();
    }

    async continueWithCashDeliveryMethodTermsCheckbox() {
        await this.paymentMethodButton.click();
        await this.conditionCheckbox.click();
        await this.continuePaymentMethodButton.click();
    }

    async confirmOrder() {
        await this.confirmButton.click();
    }

    async getOrderMessage() {
        const orderMessage = await this.messageOrderPlace;
        return orderMessage.getText();
    }

    async orderHistoryCheck() {
        await this.orderHistory.click();
    }

}

module.exports = new PhonePage();