const Page = require('./page');
const CalcFactory = require('../buisnessPatterns/factory')

class CalcPage {

    get switchFirstFrame() {
        return ("//article[@id='cloud-site']//iframe");
    };

    get switchSecondFrame() {
        return ("//iframe[@id='myFrame']");
    };

    get pushNumbInstances() {
        return $("//input[@id='input_75']");
    };

    get pushSeries() {
        return $("//md-select[@name='series']/md-select-value[@class='md-select-value']");
    };

    async chooseSeries(series, timeout) {
        const locator = `//md-option[@value='${series}']`;
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();

    };

    get pushMachineType() {
        return $("//md-select[@placeholder='Instance type']/md-select-value[@class='md-select-value']");
    };

    async chooseMashineType(mashineType, timeout) {
        const locator = `//md-option[@value='${mashineType}']`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };

    get pushAddGPUs() {
        return $("//form[@class='ng-scope ng-valid-min ng-valid-max ng-dirty ng-valid-number ng-valid ng-valid-required ng-valid-parse']//md-checkbox[@aria-label='Add GPUs']/div[@class='md-container md-ink-ripple']");
    };

    get pushNumberOfGPUs() {
        return $("//md-select[@placeholder='Number of GPUs']/md-select-value/span[1]");
    };

    async chooseNumberOfGPUs(numberOfGPUs, timeout) {
        const locator = `//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]']//div[contains(text(),'${numberOfGPUs}')]`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };

    get pushGPuType() {
        return $("//md-select[@placeholder='GPU type']");
    };

    async chooseGPuType(gpuType, timeout) {
        const locator = `//md-option[@value='${gpuType}']/div`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };

    get pushLocalSSD() {
        return $("//md-select[@placeholder='Local SSD']/md-select-value//div[@class='md-text ng-binding']");
    };

    async chooseLocalSSD(localSSD, timeout) {
        const locator = `//div[contains(text(),'${localSSD}')]`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };

    get pushDataCenter() {
        return $("//md-select[@placeholder='Datacenter location']/md-select-value//div[@class='md-text ng-binding']");
    };

    async chooseDataCenter(dataCenter, timeout) {
        const locator = `//md-select-menu[@class='md-overflow']//div[contains(text(),'${dataCenter}')]`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };


    get pushCommitedUsage() {
        return $("//md-select-value//div[text()='None']");
    };

    async chooseCommitedUsage(commitedUsage, timeout) {
        const locator = `//div[@class='md-select-menu-container md-active md-clickable']//div[contains(text(),'${commitedUsage}')]`
        await $(locator).waitForClickable({ timeout });
        await $(locator).click();
    };

    get pushAddBtn() {
        return $("//form[@name='ComputeEngineForm']//button[@aria-label='Add to Estimate']");
    };

    get pushEmailBtn() {
        return $("//button[@id='email_quote']");
    };

    get pushMailString() {
        return $("//input[@class='ng-pristine ng-untouched md-input ng-empty ng-invalid ng-invalid-required ng-valid-email']");
    };

    get pushSendMailBtn() {
        return $("//button[@aria-label = 'Send Email']");
    };

    get checkRegion() {
        return $("//div[@class='md-list-item-text ng-binding'][contains(text(),'Frankfurt')]");
    };

    get checkInstType() {
        return $("//div[@class='md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(),'n1-standard-8')]");
    };

    get checkVMclass() {
        return $("//div[@class='md-list-item-text ng-binding'][contains(text(),'VM class: regular')]");
    };

    get checkLocSSD() {
        return $("//div[@class='md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(),'Local SSD: 2x375 GiB')]");
    };

    get checkCommitedTerm() {
        return $("//div[@class='md-list-item-text ng-binding'][contains(text(),'Commitment term: 1 Year')]");
    };

    get checkLastSum() {
        return $("//h2/b[@class='ng-binding']");
    };

    async clickAndWait(element, timeout) {
        await element.waitForClickable({ timeout });
        await element.click();
    };
};


module.exports = new CalcPage();
