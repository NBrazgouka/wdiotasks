const Page = require('../../app/page-objects/page');
const ProductPage = require('../../app/page-objects/product-page');
const DisplayPage = require('../../app/page-objects/display-page');

describe('Scenario1', () => {

    it('should open awesome-shop site', async () => {
       await Page.openPage();
       browser.maximizeWindow();
    });

    it('should click Apple cinema 30" item', async () => {
        await DisplayPage.openDisplayPage();
    });

    it('should select Medium in radio option', async () => {
        await DisplayPage.selectRadioOption();
    });

    it('should select checkbox 2, 4 in Checkbox option', async () => {
        await DisplayPage.selectCheckboxOptions();
    });

    it ('should paste short quote in Text option', async () => {
        await DisplayPage.pastShortText('Short quote is added');
    });

    it ('should select Green option in Select dropdown', async () => {
        await DisplayPage.selectDropdownOption();
    });

    it ('should paste long quote in TextArea option', async () => {
        await DisplayPage.pastLongText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    });

    it ('should add quantity 3 to cart', async () => {
        await ProductPage.addQuantityToCart('3'); 
    });

    it ('should open cart', async () => {
        await ProductPage.viewCart();
    });

    it ('should assert that selected values are applied', async () => {
        const productNameColumn = await $('#content > form > div > table > tbody > tr > td:nth-child(2)');
        await expect(productNameColumn).toHaveTextContaining(['Apple Cinema 30"', 'Radio: Medium', 'Checkbox: Checkbox 2', 'Checkbox: Checkbox 4', 'Text: Short quote is added', 'Select: Green', 'Textarea: Lorem ipsum dolor si..']);
    });

    it ('should assert that VAT 20% is calculated correctly', async () => {
        const subTotalValue = await $('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > strong');
        const vatValue = await $('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(1)');
        await vatValue.isEqual(subTotalValue * 0.20);
    });

    it ('should close the browser', async () => {
        await browser.closeWindow();
    });

});

