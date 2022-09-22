const Page = require('./page');
const log = require('../utils/log');

class ProductPage extends Page {

    get inputQuantity() {
        return $('#input-quantity');
    } 

    get addToCartButton() {
        return $('#button-cart');
    }

    get shoppingCartButton() {
        return $('#cart-total');
    }

    get viewCartButton() {
        return $('//a[@class="btn btn-block btn-default"]');
    }

    open() {
        return super.open('/');
    }

    async addQuantityToCart(quantity) {
        log.debug('Adding quantity of product to shopping cart');
        await this.inputQuantity.setValue(quantity);
        await this.addToCartButton.click();
    }

    async viewCart() {
        log.debug('Opening shopping cart');
        await this.shoppingCartButton.click();
        await this.viewCartButton.click();
    }
}

module.exports = new ProductPage();