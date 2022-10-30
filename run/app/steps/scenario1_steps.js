const { Given, When, Then} = require('@cucumber/cucumber');
const Page = require('../../app/page-objects/page');
const productPage = require('../../app/page-objects/product-page');
const displayPage = require('../../app/page-objects/display-page');
const quantity = require('../../app/business-objects/quantity');
const text = require('../../app/business-objects/text');

const page = new Page();

Given(/^I open the site$/, async () => {
    await page.open();
    await page.maximize();
});

When(/^I click on Apple cinema 30" item$/, async () => {
    await displayPage.openDisplayPage();
});

When(/^I select Medium in radio option$/, async () => {
    await displayPage.selectRadioOption();
});

When(/^I select checkbox 2, 4 in Checkbox option$/, async () => {
    await displayPage.selectCheckboxOptions();
});

When(/^I paste short quote in Text option$/, async () => {
    await displayPage.pasteShortText(text);
});

When(/^I select Green option in Select dropdown$/, async () => {
    await displayPage.selectDropdownOption();
});

When(/^I paste long quote in TextArea option$/, async () => {
    await displayPage.pasteLongText(text);
});

When(/^I add quantity 3 to cart$/, async () => {
    await productPage.addQuantityToCart(quantity.display);
});

When(/^I open cart$/, async () => {
    await productPage.viewCart();
});

Then(/^Selected values are applied$/, async () => {
    await expect(displayPage.productNameColumn).toHaveTextContaining(['Apple Cinema 30"', 'Radio: Medium', 'Checkbox: Checkbox 2', 'Checkbox: Checkbox 4', 'Text: Short quote is added', 'Select: Green', 'Textarea: Lorem ipsum dolor si..']);
});

Then(/^VAT 20% is calculated correctly$/, async () => {
    const vat = await displayPage.getVatValue();
    const subTotal = await displayPage.getSubTotalValue() * 0.2;
    await expect(vat.toFixed(2)).toEqual(subTotal.toFixed(2));
});

Then (/^page is closed$/, async () => {
    await page.close();
});