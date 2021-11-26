const Page = require('./page');

class YopmailPage extends Page {

    get pushRandomMailBtn() {
        return $("//div[@id='listeliens']/a[1]");
    };

    get pushCopyBtn() {
        return $("//button[@id='cprnd']");
    };

    get checkMailBtn() {
        return $("//div[@class='nw']/button[last()]");
    };

    get switchMailFrame() {
        return ("//iframe[@id='ifmail']");
    };

    get checkSumMail() {
        return $("//h3[contains(text(),'USD')]");
    };

    get waitMail() {
        return $("//div[@class= 'm']");
    };

    async mailRefresh(timeout) {
        await browser.refresh();
        await browser.setTimeout({
            'pageLoad': timeout,
            'script': timeout
        });
        await browser.refresh();
        await browser.refresh();
    };
    async clickAndWait(element, timeout) {
        await element.waitForClickable({ timeout });
        await element.click();
    }
};


module.exports = new YopmailPage();