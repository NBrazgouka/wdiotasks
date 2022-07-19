describe('Scenario2', () => {

    it('should open awesome-shop site', async () => {
       await browser.url(`https://awesome-shop.ru/`);
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
      const loginButton = await $ ('/html/body/div[2]/div/div/div/div[2]/div/form/input');
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

}); 