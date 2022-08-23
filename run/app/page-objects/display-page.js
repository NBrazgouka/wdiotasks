const Page = require('./page');
const log = require('../utils/log');

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
        log.info(`Opening display page`);
        await this.openDisplay.click();
    } 

    async selectRadioOption() {
        log.info(`Selecting Medium radio option`);
        await browser.execute(function () {
            document.querySelector('input[value = "6"]').click();
        });
    }
    
    async selectCheckboxOptions() {
        log.info(`Selecting checkbox 2 and checkbox 4`);
        await browser.execute(function () {
            document.querySelector('input[value = "9"]').click();
            document.querySelector('input[value = "11"]').click();
        });
    }

    async pasteShortText(text) {
        log.debug(`Pasting short text: ${text.short}`);
        await this.shortTextInput.setValue(text.short);
    }

    async selectDropdownOption() {
        log.debug(`Choosing Green value in Select dropdown`);
        await this.openDropdown.click();
        await this.dropdownValue.click();
    }

    async pasteLongText(text) {
        log.debug(`Pasting long text: ${text.long}`);
        await this.longTextInput.setValue(text.long);
    }

    async getSubTotalValue() {
        const subtotal = await this.subTotalValue;
        log.debug(`Subtotal value "${subtotal}" is "${Number}"`);
        return Number(subtotal.getText());
    }

    async getVatValue() {
        const vat = await this.vatValue;
        log.debug(`Vat value "${vat}" is "${Number}"`)
        return Number(vat.getText());
    }

}

module.exports = new DisplayPage();