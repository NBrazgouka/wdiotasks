const Page = require('../../app/page-objects/page');
const LoginPage = require('../../app/page-objects/login-page');
const ProductPage = require('../../app/page-objects/product-page');
const PhonePage = require('../../app/page-objects/phone-page');

describe('Scenario1', () => {

    it('should open awesome-shop site', async () => {
       await Page.open();
       browser.maximizeWindow();
    });

    it('should let user log in', async () => {
       await LoginPage.loginUser('5768862@gmail.com', '159753');
    });

    it ('should return to home page', async () => {
        await Page.open();
    });

    it ('should click iPhone item', async () => {
        await PhonePage.openPhonePage();
    });

    it ('should add to Cart 7 phones', async () => {
        await ProductPage.addQuantityToCart('7');
    });

    it ('should open cart', async () => {
        await ProductPage.viewCart();
    });

    it ('should open toggle Use Coupon Code', async () => {
        await PhonePage.openCouponToggle();
    });

    it ('should apply coupon LuckyUser', async () => {
        await PhonePage.applyCoupon();
    });

    it ('should check that 15% discount is applied', async () => {
        const subTotalValue = await $('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');
        const discountValue = await $('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
        await discountValue.isEqual(subTotalValue * 0.15);
    });

    it ('should check message "Success: Your coupon discount has been applied!"', async () => {
        const successMessage = await $('body');
        await expect(successMessage).toHaveTextContaining('Success: Your coupon discount has been applied!');
    });

    it ('should click Checkout button', async () => {
        await PhonePage.clickCheckoutButton();
    });

    it ('should select an option "I want to use a new address", fill the form and click Continue', async () => {
        await PhonePage.fillFormWithNewAddress('Nadzeya', 'Brazgouka', 'Kuprevicha 3V', 'Minsk');
    });

    it ('should select option "I want to use an existing address" in delivery details and click Continue', async () => {
        await PhonePage.continueWithExistingAddress(); 
    });

    it ('should fill comment and click Continue', async () => {
        await PhonePage.continueWithComment('Billing address is changed');
    });

    it ('should select Cash&Delivery method, click Terms&conditions checkbox and click Continue', async () => {
        await PhonePage.continueWithCashDeliveryMethodTermsCheckbox();
    });

    it ('should click Confirm order button', async () => {
        await PhonePage.confirmOrder();
    });

    it ('should check message "Your order has been placed!"', async () => {
        const successOrderMessage = await $('body');
        await expect(successOrderMessage).toHaveTextContaining('Your order has been placed!');
    });

    it ('should check order exists in order history', async () => {
        const orderHistory = await $('#content > p:nth-child(3) > a:nth-child(2)');
        await orderHistory.click();
        const orderTable = await $('.table-responsive');
        await expect(orderTable).toBePresent();
    })

    it ('should close the browser', async () => {
        await browser.closeWindow();
    });

}); 