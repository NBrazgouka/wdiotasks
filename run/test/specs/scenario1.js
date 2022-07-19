describe('Scenario1', () => {

    it('should open awesome-shop site', async () => {
       await browser.url(`https://awesome-shop.ru/`);
    });

    it('should click Apple cinema 30" item', async () => {
        const link = await $ ('=Apple Cinema 30"');
        await link.click();
    });

    it('should select Medium in radio option', async () => {
        const radioButton = await $ ('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/div/div[2]/label');
        await radioButton.click();
    });

    it('should select checkbox 2, 4 in Checkbox option', async () => {
        const checkbox2 = await $ ('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[2]/div/div[2]/label');
        await checkbox2.click();
        const checkbox4 = await $ ('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[2]/div/div[4]/label');
        await checkbox4.click();
    });

    it ('should paste short quote in Text option', async () => {
        const textInput = await $ ('#input-option208');
        await textInput.setValue('Short quote is added');
    });

    it ('should select Green option in Select dropdown', async () => {
        const selectDropdown = await $ ('#input-option217');
        await selectDropdown.click();
        const greenValue = await $ ('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[4]/select/option[4]');
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
        const addToCartButton = await $('/html/body/div[2]/div/div/div[1]/div[2]/div[2]/div[6]/button');
        await addToCartButton.click();
    });

    it ('should click Shopping cart icon', async () => {
        const shoppingCartIcon = await $('/html/body/div[1]/header/div/div/div[2]/div[2]/button/i')
        await shoppingCartIcon.click();
    });

    it ('should click View cart button', async () => {
        const viewCartButton = await $('/html/body/div[1]/header/div/div/div[2]/div[2]/ul/li[2]/div/p/a[1]');
        await viewCartButton.click();
    });

    /*it ('should assert that selected values are applied', () => {
        const productNameColumn = $('=#')
        expect(productNameColumn).toHaveValue('Apple Cinema 30"')
    });

    it ('should assert that VAT 20% is calculated correctly');*/

    it ('should close the browser', async () => {
        await browser.closeWindow();
    });

});

