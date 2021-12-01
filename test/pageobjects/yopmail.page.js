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

    get pushMailRefreshBtn() {
        return $("//button[@id='refresh']")
    };

    async clickAndWait(element, timeout) {
        await element.waitForClickable({ timeout });
        await element.click();
    }
};


module.exports = new YopmailPage();