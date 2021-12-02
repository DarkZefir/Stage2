const Page = require('./pagePasteb');

class PastebinResultPage extends Page {
    get showDetails() {
        return $("//div[@class='details']");
    };

    get highlightingText() {
        return $("//a[text()='Bash']");
    };

    get bashArea() {
        return $("//div[@class='de1']/child::*");
    };

    get newTextArea() {
        return $("//textarea[@class='textarea']");
    };
};

module.exports = new PastebinResultPage();
