const Page = require('./page');


class GooglePage extends Page {

    get pushSearchBtn() {
        return $("//input[@name='q']");
    };

    get openPricingCalc() {
        return $("//a/b[text()='Google Cloud Platform Pricing Calculator']");
    };

    open() {
        return super.open('login');
    };
};

module.exports = new GooglePage();
