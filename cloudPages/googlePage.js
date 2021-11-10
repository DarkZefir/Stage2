const { By } = require('selenium-webdriver');

class GooglePage {

    get pushSearchBtn() {
        return (By.xpath("//input[@name='q']"));
    };

    get openPricingCalc() {
        return (By.xpath("//a/b[text()='Google Cloud Platform Pricing Calculator']"));
    };
};

module.exports = GooglePage;