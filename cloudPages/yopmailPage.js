const { By } = require('selenium-webdriver');

class YopmailPage {

    get pushRandomMailBtn() {
        return (By.xpath("//a[@title='Генератор Одноразовых адресов электронной почты создаёт новый адрес для вас за один клик!']"));
    };

    get pushCopyBtn() {
        return (By.xpath("//button[@id='cprnd']"));
    };

    get checkMailBtn() {
        return (By.xpath("//span[text()='Проверить почту']"));
    };

    get switchMailFrame() {
        return (By.xpath("//iframe[@id='ifmail']"));
    };

    get checkSumMail() {
        return (By.xpath("//h3[contains(text(),'USD')]"));
    };
};

module.exports = YopmailPage;