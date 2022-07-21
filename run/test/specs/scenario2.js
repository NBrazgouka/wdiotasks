describe('Scenario2', () => {

    it('should open awesome-shop site', async () => {
       await browser.url(`https://awesome-shop.ru/`);
       browser.maximizeWindow();
    });

    it('should let user log in', async () => {
      const loginDropdown = await $ ('.acc-section');
      await loginDropdown.click();
      const linkLogin = await $ ('=Login');
      await linkLogin.click();
      const emailInput = await $ ('#input-email');
      await emailInput.setValue('5768862@gmail.com');
      const passwordInput = await $ ('#input-password');
      await passwordInput.setValue('159753');
      const loginButton = await $ ('#content > div > div:nth-child(2) > div > form > input');
      await loginButton.click();
    });

    it ('should return to home page', async () => {
        await browser.url(`https://awesome-shop.ru/`);
    });

    it ('should click iPhone item', async () => {
        const iPhoneLink = await $ ('=iPhone');
        await iPhoneLink.click();
    });

    it ('should add to Cart 7 phones', async () => {
        const quantityInput = await $ ('#input-quantity');
        await quantityInput.setValue('7');
        const addToCartButton = await $ ('#button-cart');
        await addToCartButton.click();
    });

    it ('should click Shopping cart icon at the top of the page', async () => {
        const shoppingCartIcon = await $ ('#cart-total');
        await shoppingCartIcon.click();
    });

    it ('should click View cart button', async () => {
        const viewCartButton = await $ ('//a[@class="btn btn-block btn-default"]');
        await viewCartButton.click();
    });

    it ('should open toggle Use Coupon Code', async () => {
        const couponToggle = await $ ('#accordion a.accordion-toggle[href*="#collapse-coupon"]');
        await couponToggle.click();
    });

    /*it ('should apply coupon LuckyUser', async () => {
        await browser.waitUntil(
            async () => (await $('#input-coupon').setValue() === 'LuckyUser',
            {
                timeout: 3000,
                timeoutMsg: 'expected coupon to be applied after 3s'
            }));
        const applyCouponButton = await $ ('#button-coupon');
        await applyCouponButton.click();
    });*/

    it ('should apply coupon LuckyUser', async () => {
        const couponInput = await $ ('#input-coupon');
        await couponInput.setValue('LuckyUser');
        const applyCouponButton = await $ ('#button-coupon');
        await applyCouponButton.click();
    });

    it ('should check that 15% discount is applied', async () => {
        const subTotalValue = await $ ('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');
        const discountValue = await $ ('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
        await discountValue.isEqual(subTotalValue*0.15);
    });

    it ('should check message "Success: Your coupon discount has been applied!"', async () => {
        const successMessage = await $ ('body');
        await expect(successMessage).toHaveTextContaining('Success: Your coupon discount has been applied!');
    });

    it ('should click Checkout button', async () => {
        const checkoutButton = await $ ('#content > div.buttons.clearfix > div.pull-right > a');
        await checkoutButton.click();
    });

    it ('should select an option "I want to use a new address", fill the form and click Continue', async () => {
        const newAddressButton = await $ ('label=I want to use a new address');
        await newAddressButton.click();
        const inputFirstName = await $ ('#input-payment-firstname');
        await inputFirstName.setValue('Nadzeya');
        const inputLastName = await $ ('#input-payment-lastname');
        await inputLastName.setValue('Brazgouka');
        const inputAddress1 = await $ ('#input-payment-address-1');
        await inputAddress1.setValue('Kuprevicha 3V');
        const inputCity = await $ ('#input-payment-city');
        await inputCity.setValue('Minsk');
        const countryDropdown = await $ ('#input-payment-country');
        await countryDropdown.click();
        const BelarusValue = await $ ('//select[@id = "input-payment-country"]//option[@value = 20]');
        await BelarusValue.click();
        const regionDropdown = await $ ('#input-payment-zone');
        await regionDropdown.click();
        const MinskValue = await $ ('//select[@id = "input-payment-zone"]//option[@value = 339]');
        await MinskValue.click();
        const continueButton1 = await $ ('#button-payment-address');
        await continueButton1.click();
    });

    it ('should select option "I want to use an existing address" in delivery details and click Continue', async () => {
        const existingAddressButton = await $ ('label=I want to use an existing address');
        await existingAddressButton.click();
        const continueButton2 = await $ ('#button-shipping-address');
        await continueButton2.click(); 
    });

    it ('should fill comment and click Continue', async () => {
        const commentInput = await $ ('#collapse-shipping-method > div > p:nth-child(5) > textarea');
        await commentInput.setValue('Billing address is changed');
        const continueButton3 = await $ ('#button-shipping-method');
        await continueButton3.click();
    });

    it ('should select Cash&Delivery method, click Terms&conditions checkbox and click Continue', async () => {
        const paymentMethodButton = await $ ('#collapse-payment-method > div > div:nth-child(3) > label');
        await paymentMethodButton.click();
        const conditionCheckbox = await $ ('#collapse-payment-method > div > div.buttons > div > input[type=checkbox]:nth-child(2)');
        await conditionCheckbox.click();
        const continueButton4 = await $ ('#button-payment-method');
        await continueButton4.click();
    });

    it ('should click Confirm order button', async () => {
        const confirmButton = await $ ('#button-confirm');
        await confirmButton.click();
    });

    it ('should check message "Your order has been placed!"', async () => {
        const successOrderMessage = await $ ('body');
        await expect(successOrderMessage).toHaveTextContaining('Your order has been placed!');
    });

    it ('should check order exists in order history', async () => {
        const orderHistory = await $ ('#content > p:nth-child(3) > a:nth-child(2)');
        await orderHistory.click();
        const orderTable = await $ ('.table-responsive');
        await expect(orderTable).toBePresent();
    })

    it ('should close the browser', async () => {
        await browser.closeWindow();
    });

}); 