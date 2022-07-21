describe('Scenario1', () => {

    it('should open awesome-shop site', async () => {
       await browser.url(`https://awesome-shop.ru/`);
       browser.maximizeWindow();
    });

    it('should click Apple cinema 30" item', async () => {
        const link = await $ ('=Apple Cinema 30"');
        await link.click();
    });

    it('should select Medium in radio option', async () => {
        const radioButton = await $ ('//div[@id = "input-option218"]//input[@value = 6]');
        await radioButton.click();
    });

    it('should select checkbox 2, 4 in Checkbox option', async () => {
        const checkbox2 = await $ ('//div[@id = "input-option223"]//input[@value = 9]');
        await checkbox2.click();
        const checkbox4 = await $ ('//div[@id = "input-option223"]//input[@value = 11]');
        await checkbox4.click();
    });

    it ('should paste short quote in Text option', async () => {
        const textInput = await $ ('#input-option208');
        await textInput.setValue('Short quote is added');
    });

    it ('should select Green option in Select dropdown', async () => {
        const selectDropdown = await $ ('#input-option217');
        await selectDropdown.click();
        const greenValue = await $ ('//select[@id = "input-option217"]//option[@value = 1]');
        await greenValue.click();
    });

    it ('should paste long quote in TextArea option', async () => {
        const textAreaInput = await $('#input-option209');
        await textAreaInput.addValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    });

    it ('should set quantity 3', async () => {
        const quantityInput = await $('#input-quantity');
        await quantityInput.setValue('3'); 
    });

    it ('should click Add to cart button', async () => {
        const addToCartButton = await $('#button-cart');
        await addToCartButton.click();
    });

    it ('should click Shopping cart icon at the top of the page', async () => {
        const shoppingCartIcon = await $('#cart-total')
        await shoppingCartIcon.click();
    });

    it ('should click View cart button', async () => {
        const viewCartButton = await $('//a[@class="btn btn-block btn-default"]');
        await viewCartButton.click();
    });

    it ('should assert that selected values are applied', async () => {
        const productNameColumn = await $('#content > form > div > table > tbody > tr > td:nth-child(2)');
        await expect(productNameColumn).toHaveTextContaining(['Apple Cinema 30"', 'Radio: Medium', 'Checkbox: Checkbox 2', 'Checkbox: Checkbox 4', 'Text: Short quote is added', 'Select: Green', 'Textarea: Lorem ipsum dolor si..']);
    });

    it ('should assert that VAT 20% is calculated correctly', async () => {
        const subTotalValue = await $ ('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > strong');
        const VATValue = await $ ('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(1)');
        await VATValue.isEqual(subTotalValue*0.20);
    });

    it ('should close the browser', async () => {
        await browser.closeWindow();
    });

});

