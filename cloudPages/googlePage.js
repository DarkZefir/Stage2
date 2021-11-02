const { By } = require('selenium-webdriver');

class GooglePage {

    get pushSearchBtn() {
        return (By.xpath("//input[@name='q']"));
    };

    get openPricingCalc1() {
        return (By.xpath("//a[@class='gs-title'][contains(text(),'Pricing Calculator')]"));
    };

    get openPricingCalc2() {
        return (By.xpath("//div[@class='gsc-thumbnail-inside']//a/b[text()='Google Cloud Platform Pricing Calculator']"));
    };
};

module.exports = GooglePage;