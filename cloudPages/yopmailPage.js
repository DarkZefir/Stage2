const { By } = require('selenium-webdriver');

class YopmailPage {

    get pushRandomMailBtn() {
        return (By.xpath("//div[@id='listeliens']/a[1]"));
    };

    get pushCopyBtn() {
        return (By.xpath("//button[@id='cprnd']"));
    };

    get checkMailBtn() {
        return (By.xpath("//div[@class='nw']/button[last()]"));
    };

    get switchMailFrame() {
        return (By.xpath("//iframe[@id='ifmail']"));
    };

    get checkSumMail() {
        return (By.xpath("//h3[contains(text(),'USD')]"));
    };

    get waitMail() {
        return (By.xpath("//div[@class= 'm']"));
    };
};

module.exports = YopmailPage;