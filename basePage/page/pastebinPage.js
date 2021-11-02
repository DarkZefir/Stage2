const { By } = require('selenium-webdriver');

class PastebinPage {
    constructor() {

    };

    get findTextArea() {
        return (By.xpath("//textarea[@class='textarea -form js-paste-code']"));
    };

    get writeText() {
        return (`git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force`);
    };

    get pushHighlightingBtn() {
        return (By.xpath("//span[@data-select2-id='1']//span[@class='select2-selection__arrow']"));
    };

    get pushBashBtn() {
        return (By.xpath("//li[text()='Bash']"));
    };

    get pushExpirationBtn() {
        return (By.xpath("//span[@id='select2-postform-expiration-container']"));
    };

    get push10MinBtn() {
        return (By.xpath("//li[text()='10 Minutes']"));
    };

    get pasteName() {
        return (By.xpath("//input[@id='postform-name']"));
    };

    get textPasteName() {
        return ('how to gain dominance among developers');
    };

    get pushCookiesBtn() {
        return (By.xpath("//span[text()='OK, I Understand']"));
    };

    get hideBanner() {
        return (By.xpath("//vli[@id='hideSlideBanner']"));
    };
};
module.exports = PastebinPage;