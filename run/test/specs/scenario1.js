const Page = require('../../app/page-objects/page');
const productPage = require('../../app/page-objects/product-page');
const displayPage = require('../../app/page-objects/display-page');

describe('Scenario1', () => {

    const page = new Page();

    it('should open awesome-shop site', async () => {
        await page.open();
        await page.maximize();
     });

    it('should click Apple cinema 30" item', async () => {
        await displayPage.openDisplayPage();
    });

    it('should select Medium in radio option', async () => {
        await displayPage.selectRadioOption();
    });

    it('should select checkbox 2, 4 in Checkbox option', async () => {
        await displayPage.selectCheckboxOptions();
    });

    it ('should paste short quote in Text option', async () => {
        await displayPage.pasteShortText('Short quote is added');
    });

    it ('should select Green option in Select dropdown', async () => {
        await displayPage.selectDropdownOption();
    });

    it ('should paste long quote in TextArea option', async () => {
        await displayPage.pasteLongText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
    });

    it ('should add quantity 3 to cart', async () => {
        await productPage.addQuantityToCart('3'); 
    });

    it ('should open cart', async () => {
        await productPage.viewCart();
    });

    it ('should assert that selected values are applied', async () => {
        await expect(displayPage.productNameColumn).toHaveTextContaining(['Apple Cinema 30"', 'Radio: Medium', 'Checkbox: Checkbox 2', 'Checkbox: Checkbox 4', 'Text: Short quote is added', 'Select: Green', 'Textarea: Lorem ipsum dolor si..']);
    });

    it ('should assert that VAT 20% is calculated correctly', async () => {
        await expect(await displayPage.getVatValue()).toEqual(await displayPage.getSubTotalValue() * 0.20);
    });

    after (async () => {
        page.close();
    });

});

