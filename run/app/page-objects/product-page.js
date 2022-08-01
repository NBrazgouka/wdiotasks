const Page = require('./page');

class productPage extends Page {

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
        await this.inputQuantity.setValue(quantity);
        await this.addToCartButton.click();
    }

    async viewCart() {
        await this.shoppingCartButton.click();
        await this.viewCartButton.click();
    }
}

module.exports = new productPage();