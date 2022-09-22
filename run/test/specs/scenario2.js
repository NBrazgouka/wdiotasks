const Page = require('../../app/page-objects/page');
const loginPage = require('../../app/page-objects/login-page');
const productPage = require('../../app/page-objects/product-page');
const phonePage = require('../../app/page-objects/phone-page');
const user = require('../../app/business-objects/user');
const quantity = require('../../app/business-objects/quantity');
const coupon = require('../../app/business-objects/coupon');
const text = require('../../app/business-objects/text');

describe('Scenario2', () => {

    const page = new Page();

    it('should open awesome-shop site', async () => {
       await page.open();
       await page.maximize();
    });

    it('should let user log in', async () => {
        await loginPage.loginUser(user);
     });

    it ('should return to home page', async () => {
        await page.open();
    });

    it ('should click iPhone item', async () => {
        await phonePage.openPhonePage();
    });

    it ('should add to Cart 7 phones', async () => {
        await productPage.addQuantityToCart(quantity.phone);
    });

    it ('should open cart', async () => {
        await productPage.viewCart();
    });

    it ('should open toggle Use Coupon Code', async () => {
        await phonePage.openCouponToggle();
    });

    it ('should apply coupon LuckyUser', async () => {
        await phonePage.setCouponValue(coupon);
    });

    it ('should check that 15% discount is applied', async () => {
        const subTotal = await phonePage.getSubTotalValue() * 0.15;
        const discount = await phonePage.getDiscountValue();
        await expect(discount.toFixed(2)).toEqual(subTotal.toFixed(2));
    });

    it ('should check message "Success: Your coupon discount has been applied!"', async () => {
        expect(await phonePage.getSuccessMessage()).toHaveTextContaining('Success: Your coupon discount has been applied!');
    });

    it ('should click Checkout button', async () => {
        await phonePage.clickCheckoutButton();
    });

    it ('should select an option "I want to use a new address", fill the form and click Continue', async () => {
        await phonePage.fillFormWithNewAddress(user);
    });

    it ('should select option "I want to use an existing address" in delivery details and click Continue', async () => {
        await phonePage.continueWithExistingAddress(); 
    });

    it ('should fill comment and click Continue', async () => {
        await phonePage.continueWithComment(text);
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