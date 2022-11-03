const { Given, When, Then} = require('@cucumber/cucumber');
const Page = require('../../app/page-objects/page');
const loginPage = require('../../app/page-objects/login-page');
const productPage = require('../../app/page-objects/product-page');
const phonePage = require('../../app/page-objects/phone-page');
const {user, defaultUser} = require('../../app/business-objects/user');
const quantity = require('../../app/business-objects/quantity');
const coupon = require('../../app/business-objects/coupon');
const text = require('../../app/business-objects/text');

const page = new Page();

Given(/^I open the site$/, async () => {
    await page.open();
    await page.maximize();
});

When(/^I perform login$/, async () => {
    await loginPage.loginUser(defaultUser);
});

When(/^I return to home page$/, async () => {
    await page.open();
});

When(/^I click iPhone item$/, async () => {
    await phonePage.openPhonePage();
});

When(/^I add to Cart 7 phones$/, async () => {
    await productPage.addQuantityToCart(quantity.phone);
});

When(/^I open cart$/, async () => {
    await productPage.viewCart();
});

When(/^I open toggle Use Coupon Code$/, async () => {
    await phonePage.openCouponToggle();
});

When(/^I apply coupon LuckyUser$/, async () => {
    await phonePage.setCouponValue(coupon);
});

Then(/^15% discount is applied$/, async () => {
    const subTotal = await phonePage.getSubTotalValue() * 0.15;
    const discount = await phonePage.getDiscountValue();
    await expect(discount.toFixed(2)).toEqual(subTotal.toFixed(2));
});

Then(/^message "Success: Your coupon discount has been applied!" is displayed$/, async () => {
    expect(await phonePage.getSuccessMessage()).toHaveTextContaining('Success: Your coupon discount has been applied!');
});

When(/^I click Checkout button$/, async () => {
    await phonePage.clickCheckoutButton();
});

When(/^I select an option "I want to use a new address", fill the form and click Continue$/, async () => {
    await phonePage.fillFormWithNewAddress(user);
});

When(/^I select option "I want to use an existing address" in delivery details and click Continue$/, async () => {
    await phonePage.continueWithExistingAddress();
});

When(/^I fill comment and click Continue$/, async () => {
    await phonePage.continueWithComment(text);
});

When(/^I select Cash&Delivery method, click Terms&conditions checkbox and click Continue$/, async () => {
    await phonePage.continueWithCashDeliveryMethodTermsCheckbox();
});

When(/^I click Confirm order button$/, async () => {
    await phonePage.confirmOrder();
});

Then(/^message "Your order has been placed!" is displayed$/, async () => {
    expect(await phonePage.getOrderMessage()).toHaveTextContaining('Your order has been placed!');
});

Then(/^order exists in order history$/, async () => {
    await phonePage.orderHistoryCheck();
    await expect(phonePage.orderTable).toBePresent();
});

Then (/^page is closed$/, async () => {
    await page.close();
});