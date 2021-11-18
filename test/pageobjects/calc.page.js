const Page = require('./page');


class CalcPage extends Page {
    get switchFirstFrame() {
        return ("//article[@id='cloud-site']//iframe");
    };

    get switchSecondFrame() {
        return ("//iframe[@id='myFrame']");
    };

    get pushNumbInstances() {
        return $("//input[@id='input_74']");
    };

    get pushSeries() {
        return $("//md-select[@name='series']/md-select-value[@class='md-select-value']");
    };

    get chooseSeries() {
        return $("//md-option[@value='n1']");
    };

    get pushMachineType() {
        return $("//md-select[@placeholder='Instance type']/md-select-value[@class='md-select-value']");
    };

    get chooseMashineType() {
        return $("//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']");
    };

    get pushAddGPUs() {
        return $("//form[@class='ng-scope ng-valid-min ng-valid-max ng-dirty ng-valid-number ng-valid ng-valid-required ng-valid-parse']//md-checkbox[@aria-label='Add GPUs']/div[@class='md-container md-ink-ripple']");
    };

    get pushNumberOfGPUs() {
        return $("//md-select[@placeholder='Number of GPUs']/md-select-value/span[1]");
    };

    get chooseNumberOfGPUs() {
        return $("//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]']//div[contains(text(),'1')]");
    };

    get pushGPuType() {
        return $("//md-select[@placeholder='GPU type']");
    };

    get chooseGPuType() {
        return $("//md-option[@value='NVIDIA_TESLA_V100']/div");
    };

    get pushLocalSSD() {
        return $("//md-select[@placeholder='Local SSD']/md-select-value//div[@class='md-text ng-binding']");
    };

    get chooseLocalSSD() {
        return $("//div[contains(text(),'2x375 GB')]");
    };

    get pushDataCenter() {
        return $("//md-select[@placeholder='Datacenter location']/md-select-value//div[@class='md-text ng-binding']");
    };

    get chooseDataCenter() {
        return $("//md-select-menu[@class='md-overflow']//div[contains(text(),'Frankfurt')]");
    };

    get pushCommitedUsage() {
        return $("//md-select-value//div[text()='None']");
    };

    get chooseCommitedUsage() {
        return $("//div[@class='md-select-menu-container md-active md-clickable']//div[contains(text(),'1 Year')]");
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
        return $("//b[contains(text(),'USD 1,084.69')]");
    };

    async clickAndWait(element, timeout) {
        await element.waitForClickable({ timeout });
        await element.click();
    }
};


module.exports = new CalcPage();
