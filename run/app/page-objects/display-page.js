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

    async getSelectRadioOption() {
        await browser.executeAsync(function () {
        const radioElement = document.querySelectorAll('#input-option218 > div:nth-child(2) > label > input[type=radio]');
        return $(radioElement).click();
    });
}

    
    async selectCheckboxOptions() {
        await browser.executeAsync(function() {
            const checkbox2 =  this.checkboxOption2;
            const checkbox4 =  this.checkboxOption4;
            const checkboxes = document.getElementsByClassName('checkbox');
            for (i=0; i<checkboxes.length; i++) {
                return checkbox2.checked = true;
                  }
        })
    }

    async pasteShortText(value) {
        await this.shortTextInput.setValue(value);
    }

    async selectDropdownOption() {
        await this.openDropdown.click();
        await this.dropdownValue.click();
    }

    async imageDragAndDrop() {
        const element = await this.imageDisplay;
        const target = await this.longTextInput;
        await element.waitForDisplayed();
        await element.click();
        await target.waitForDisplayed();
        await element.dragAndDrop(target);
        browser.pause(10000);
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