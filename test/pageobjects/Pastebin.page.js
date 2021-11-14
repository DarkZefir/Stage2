const Page = require('./pagePasteb');


class PastebinPage extends Page {
    get findTextArea() {
        return $("//textarea[@id='postform-text']");
    };

    get pushHighlightingBtn() {
        return $("//span[@id='select2-postform-format-container']");
    };

    get pushBashBtn() {
        return $("//li[text()='Bash']");
    };

    get pushExpirationBtn() {
        return $("//span[@id='select2-postform-expiration-container']");
    };

    get push10MinBtn() {
        return $("//li[text()='10 Minutes']");
    };

    get pasteName() {
        return $("//input[@id='postform-name']");
    };

    get pushCookiesBtn() {
        return $("//span[text()='OK, I Understand']");
    };

    get hideBanner() {
        return $("//vli[@id='hideSlideBanner']");
    };


    open() {
        return super.open();
    };
};

module.exports = new PastebinPage();
