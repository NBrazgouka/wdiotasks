const Page = require('./page');

class DisplayPage extends Page {

    get openDisplay() {
        return $('=Apple Cinema 30"');
    } 

    get radioOption() {
        return $('//div[@id = "input-option218"]//input[@value = 6]');
    }

    get checkboxOption2() {
        return $('//div[@id = "input-option223"]//input[@value = 9]');
    }

    get checkboxOption4() {
        return $('//div[@id = "input-option223"]//input[@value = 11]');
    }
    
    get shortTextInput() {
        return $('#input-option208');
    }

    get openDropdown() {
        return $('#input-option217');
    }

    get dropdownValue() {
        return $('//select[@id = "input-option217"]//option[@value = 1]');
    }

    get longTextInput() {
        return $('#input-option209');
    }

    get productNameColumn() {
        return $('#content > form > div > table > tbody > tr > td:nth-child(2)');
    }

    get subTotalValue() {
        return $('#content > div.row > div > table > tbody > tr:nth-child(1) > td:nth-child(2)');
    }

    get vatValue() {
        return $('#content > div.row > div > table > tbody > tr:nth-child(2) > td:nth-child(2)');
    }

    open() {
        return super.open('/');
    }

    async openDisplayPage() {
        await this.openDisplay.click();
    } 

    async selectRadioOption() {
        await browser.execute(function () {
            document.querySelector('input[value = "6"]').click();
        });
    }
    
    async selectCheckboxOptions() {
        await browser.execute(function () {
            document.querySelector('input[value = "9"]').click();
            document.querySelector('input[value = "11"]').click();
        });
    }

    async pasteShortText(value) {
        await this.shortTextInput.setValue(value);
    }

    async selectDropdownOption() {
        await this.openDropdown.click();
        await this.dropdownValue.click();
    }

    async pasteLongText(value) {
        await this.longTextInput.setValue(value);
    }

    async getSubTotalValue() {
        const subtotal = await this.subTotalValue;
        return Number(subtotal.getText());
    }

    async getVatValue() {
        const vat = await this.vatValue;
        return Number(vat.getText());
    }

}

module.exports = new DisplayPage();