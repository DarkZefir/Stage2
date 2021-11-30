const { expect } = require('chai');

const GooglePage = require('../pageobjects/google.page');
const CalcPage = require('../pageobjects/calc.page');
const YopmailPage = require('../pageobjects/yopmail.page');
const { clickAndWait, numberOfInstances } = require('../pageobjects/calc.page');
const { mailRefresh } = require('../pageobjects/yopmail.page');

describe('My Login application', () => {
    const searchText = 'Google Cloud Platform Pricing Calculator';
    const defaultTime = { timeout: 3000 };
    const numberOfInstances = '4';

    before(async function () {
        await GooglePage.open();
        await GooglePage.pushSearchBtn.click();
        await GooglePage.pushSearchBtn.keys(searchText);
        await GooglePage.pushSearchBtn.keys('Enter');
        await GooglePage.openPricingCalc.click();
        await browser.switchToFrame(await browser.$(CalcPage.switchFirstFrame));
        await browser.switchToFrame(await browser.$(CalcPage.switchSecondFrame));
        await CalcPage.pushNumbInstances.click();
        await CalcPage.pushNumbInstances.addValue(numberOfInstances);
        await CalcPage.pushSeries.click();
        await clickAndWait(CalcPage.chooseSeries, defaultTime);
        await CalcPage.pushMachineType.click();
        await clickAndWait(CalcPage.chooseMashineType, defaultTime);
        await CalcPage.pushAddGPUs.click();
        await CalcPage.pushGPuType.click();
        await clickAndWait(CalcPage.chooseGPuType, defaultTime);
        await CalcPage.pushNumberOfGPUs.click();
        await clickAndWait(CalcPage.chooseNumberOfGPUs, defaultTime);
        await CalcPage.pushLocalSSD.click();
        await clickAndWait(CalcPage.chooseLocalSSD, defaultTime);
        await CalcPage.pushDataCenter.click();
        await clickAndWait(CalcPage.chooseDataCenter, defaultTime);
        await CalcPage.pushCommitedUsage.click();
        await clickAndWait(CalcPage.chooseCommitedUsage, defaultTime);
        await CalcPage.pushAddBtn.click();
    });
    it('should region be Frankfurt', async function () {
        const region = await CalcPage.checkRegion.getText();
        expect(region).to.be.equal('Region: Frankfurt');
    });
    it('should instance type be n1 standart 8', async function () {
        const instanceType = await CalcPage.checkInstType.getText();
        expect(instanceType).to.be.include('Instance type: n1-standard-8');
    });
    it('should vm class be regular', async function () {
        const vmClass = await CalcPage.checkVMclass.getText();
        expect(vmClass).to.be.equal('VM class: regular');
    });
    it('should local ssd be 2x375 GB', async function () {
        const localSsd = await CalcPage.checkLocSSD.getText();
        expect(localSsd).to.be.include('Local SSD: 2x375 GiB');
    });
    it('should commitment term be 1 year', async function () {
        const comTerm = await CalcPage.checkCommitedTerm.getText();
        expect(comTerm).to.be.equal('Commitment term: 1 Year');
    });
    it('should total sum be like in manual test', async function () {
        const sum = await CalcPage.checkLastSum.getText();
        expect(sum).to.be.include('Total Estimated Cost: USD 1,288.71 per 1 month');
    });
    it('should total sum the same as in mail', async function () {
        const sum = await CalcPage.checkLastSum.getText();
        await CalcPage.pushEmailBtn.click();
        await CalcPage.pushMailString.waitForClickable(defaultTime);
        await browser.newWindow('https://yopmail.com/');
        const handles = await browser.getWindowHandles();
        await clickAndWait(YopmailPage.pushRandomMailBtn, defaultTime);
        await YopmailPage.pushCopyBtn.click();
        await browser.switchToWindow(handles[0]);
        await browser.switchToFrame(await browser.$(CalcPage.switchFirstFrame));
        await browser.switchToFrame(await browser.$(CalcPage.switchSecondFrame));
        await CalcPage.pushMailString.click();
        await CalcPage.pushMailString.keys(['Shift', 'Insert']);
        await clickAndWait(CalcPage.pushSendMailBtn, defaultTime);
        await browser.switchToWindow(handles[1]);
        await YopmailPage.checkMailBtn.click();
        await mailRefresh(5000);
        await browser.switchToFrame(await browser.$(YopmailPage.switchMailFrame));
        const sumMail = await YopmailPage.checkSumMail.getText();
        expect(sum).to.be.include(sumMail);
    });
});


