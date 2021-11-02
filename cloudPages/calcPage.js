const { By } = require('selenium-webdriver');

class CalcPage {

    get switchFirstFrame() {
        return (By.xpath("//article[@id='cloud-site']//iframe"));
    };

    get switchSecondFrame() {
        return (By.xpath("//iframe[@id='myFrame']"));
    };

    get pushNumbInstances() {
        return (By.xpath("//input[@id='input_74']"));
    };

    get pushSeries() {
        return (By.xpath("//md-select[@name='series']/md-select-value[@class='md-select-value']"));
    };

    get chooseSeries() {
        return (By.xpath("//md-option[@value='n1']"));
    };

    get pushMachineType() {
        return (By.xpath("//md-select[@placeholder='Instance type']/md-select-value[@class='md-select-value']"));
    };

    get chooseMashineType() {
        return (By.xpath("//md-option[@value='CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8']"));
    };

    get pushAddGPUs() {
        return (By.xpath("//div[@class='ng-scope layout-row']//md-checkbox[@aria-label='Add GPUs']/div[@class='md-container md-ink-ripple']"));
    };

    get pushNumberOfGPUs() {
        return (By.xpath("//md-select[@placeholder='Number of GPUs']/md-select-value"));
    };

    get chooseNumberOfGPUs() {
        return (By.xpath("//md-option[@ng-repeat='item in listingCtrl.supportedGpuNumbers[listingCtrl.computeServer.gpuType]']//div[contains(text(),'1')]"));
    };

    get pushGPuType() {
        return (By.xpath("//md-select[@placeholder='GPU type']/md-select-value"));
    };

    get chooseGPuType() {
        return (By.xpath("//md-option[@value='NVIDIA_TESLA_V100']"));
    };

    get pushLocalSSD() {
        return (By.xpath("//md-select[@placeholder='Local SSD']/md-select-value//div[@class='md-text ng-binding']"));
    };

    get chooseLocalSSD() {
        return (By.xpath("//div[contains(text(),'2x375 GB')]"));
    };

    get pushDataCenter() {
        return (By.xpath("//md-select[@placeholder='Datacenter location']/md-select-value//div[@class='md-text ng-binding']"));
    };

    get chooseDataCenter() {
        return (By.xpath("//md-select-menu[@class='md-overflow']//md-option/div[contains(text(),'Frankfurt (europe-west3)')]"));
    };

    get pushCommitedUsage() {
        return (By.xpath("//md-select-value//div[text()='None']"));
    };

    get chooseCommitedUsage() {
        return (By.xpath("//div[@class='md-select-menu-container md-active md-clickable']//div[contains(text(),'1 Year')]"));
    };

    get pushAddBtn() {
        return (By.xpath("//form[@name='ComputeEngineForm']//button[@aria-label='Add to Estimate']"));
    };

    get pushEmailBtn() {
        return (By.xpath("//button[@id='email_quote']"));
    };

    get pushMailString() {
        return (By.xpath("//input[@class='ng-pristine ng-untouched md-input ng-empty ng-invalid ng-invalid-required ng-valid-email']"));
    };

    get pushSendMailBtn() {
        return (By.xpath("//button[contains(text(),'Send Email')]"));
    };

    get checkRegion() {
        return (By.xpath("//div[@class='md-list-item-text ng-binding'][contains(text(),'Frankfurt')]"));
    };

    get checkInstType() {
        return (By.xpath("//div[@class='md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(),'n1-standard-8')]"));
    };

    get checkVMclass() {
        return (By.xpath("//div[@class='md-list-item-text ng-binding'][contains(text(),'VM class: regular')]"));
    };

    get checkLocSSD() {
        return (By.xpath("//div[@class='md-list-item-text ng-binding cpc-cart-multiline flex'][contains(text(),'Local SSD: 2x375 GiB')]"));
    };

    get checkCommitedTerm() {
        return (By.xpath("//div[@class='md-list-item-text ng-binding'][contains(text(),'Commitment term: 1 Year')]"));
    };

    get checkLastSum() {
        return (By.xpath("//b[contains(text(),'USD 1,085.25')]"));
    };
};

module.exports = CalcPage;