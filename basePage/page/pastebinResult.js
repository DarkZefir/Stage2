const { By } = require('selenium-webdriver');

class PastebinResultPage {
    constructor() {
    };

    get showDetails() {
        return (By.xpath("//div[@class='details']"));
    };

    get highlightingText() {
        return (By.xpath("//a[text()='Bash']"));
    };

    get bashArea() {
        return (By.xpath("//div[@class='de1']/child::*"));
    };

    get newTextArea() {
        return (By.xpath("//textarea[@class='textarea']"));
    };
};

module.exports = PastebinResultPage;