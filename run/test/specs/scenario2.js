const Page = require('../../app/page-objects/page');
const loginPage = require('../../app/page-objects/login-page');
const productPage = require('../../app/page-objects/product-page');
const phonePage = require('../../app/page-objects/phone-page');

describe('Scenario2', () => {

    const page = new Page();

    it('should open awesome-shop site', async () => {
       await page.open();
       await page.maximize();
    });

    it('should let user log in', async () => {
       await loginPage.loginUser('5768862@gmail.com', '159753');
    });

    it ('should return to home page', async () => {
        await page.open();
    });

    it ('should click iPhone item', async () => {
        await phonePage.openPhonePage();
    });

    it ('should add to Cart 7 phones', async () => {
        await productPage.addQuantityToCart('7');
    });

    it ('should open cart', async () => {
        await productPage.viewCart();
    });

    it ('should open toggle Use Coupon Code', async () => {
        await phonePage.openCouponToggle();
    });

    it ('should apply coupon LuckyUser', async () => {
        await phonePage.applyCoupon('LuckyUser');
    });

    it ('should check that 15% discount is applied', async () => {
        await expect (await phonePage.getDiscountValue()).toEqual(await phonePage.getSubTotalValue() * 0.15);
    });

    it ('should check message "Success: Your coupon discount has been applied!"', async () => {
        expect(await phonePage.getSuccessMessage()).toHaveTextContaining('Success: Your coupon discount has been applied!');
    });

    it ('should click Checkout button', async () => {
        await phonePage.clickCheckoutButton();
    });

    it ('should select an option "I want to use a new address", fill the form and click Continue', async () => {
        await phonePage.fillFormWithNewAddress('Nadzeya', 'Brazgouka', 'Kuprevicha 3V', 'Minsk');
    });

    it ('should select option "I want to use an existing address" in delivery details and click Continue', async () => {
        await phonePage.continueWithExistingAddress(); 
    });

    it ('should fill comment and click Continue', async () => {
        await phonePage.continueWithComment('Billing address is changed');
    });

    it ('should select Cash&Delivery method, click Terms&conditions checkbox and click Continue', async () => {
        await phonePage.continueWithCashDeliveryMethodTermsCheckbox();
    });

    it ('should click Confirm order button', async () => {
        await phonePage.confirmOrder();
    });

    it ('should check message "Your order has been placed!"', async () => {
        expect(await phonePage.getOrderMessage()).toHaveTextContaining('Your order has been placed!');
    });

    it ('should check order exists in order history', async () => {
        await phonePage.orderHistoryCheck();
        await expect(phonePage.orderTable).toBePresent();
    })

    after (async () => {
        page.close();
    });

}); 