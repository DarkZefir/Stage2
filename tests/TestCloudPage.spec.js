const { Builder, Key, until, By, } = require('selenium-webdriver');
const { expect } = require('chai');
const { after } = require('mocha');

const driver = new Builder().forBrowser('chrome').build();
const GooglePage = require('../cloudPages/googlePage.js');
const CalcPage = require('../cloudPages/calcPage.js');
const YopmailPage = require('../cloudPages/yopmailPage.js');

describe('DefaultTest', async function () {
    const googlePage = new GooglePage();
    const calcPage = new CalcPage();
    const yopmailPage = new YopmailPage();
    const searchText = 'Google Cloud Platform Pricing Calculator';
    const numberOfInstances = '4';
    const windowHandleBasepage = 'https://cloud.google.com/products/calculator#id=c4bd5d3c-2c18-4c54-93d9-b8d7a8753ce5';
    const windowHandleSecondPage = 'https://yopmail.com/ru/email-generator';

    before(async function () {
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await driver.get('https://cloud.google.com/');
        await driver.findElement(googlePage.pushSearchBtn).click();
        await driver.findElement(googlePage.pushSearchBtn).sendKeys(searchText, Key.RETURN);
        await driver.findElement(googlePage.openPricingCalc).click();
        await driver.switchTo().frame(await driver.findElement(calcPage.switchFirstFrame));
        await driver.manage().setTimeouts({ implicit: 0 });
        await driver.switchTo().frame(await driver.findElement(calcPage.switchSecondFrame));
        await driver.findElement(calcPage.pushNumbInstances).click();
        await driver.findElement(calcPage.pushNumbInstances).sendKeys(numberOfInstances);
        await driver.findElement(calcPage.pushSeries).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.chooseSeries)));
        await driver.findElement(calcPage.chooseSeries).click();
        await driver.findElement(calcPage.pushMachineType).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.chooseMashineType)));
        await driver.findElement(calcPage.chooseMashineType).click();
        await driver.findElement(calcPage.pushAddGPUs).click();
        await driver.findElement(calcPage.pushNumberOfGPUs).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.chooseNumberOfGPUs)));
        await driver.findElement(calcPage.chooseNumberOfGPUs).click();
        await driver.findElement(calcPage.pushGPuType).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.chooseGPuType)));
        await driver.findElement(calcPage.chooseGPuType).click();
        await driver.findElement(calcPage.pushLocalSSD).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.chooseLocalSSD)));
        await driver.findElement(calcPage.chooseLocalSSD).click();
        await driver.findElement(calcPage.pushDataCenter).click();
        await driver.wait(until.elementIsEnabled(await driver.findElement(calcPage.chooseDataCenter)), 13000);
        await driver.findElement(calcPage.chooseDataCenter).click();
        await driver.findElement(calcPage.pushCommitedUsage).click();
        await driver.wait(until.elementIsEnabled(await driver.findElement(calcPage.chooseCommitedUsage)), 15000);
        await driver.findElement(calcPage.chooseCommitedUsage).click();
        await driver.findElement(calcPage.pushAddBtn).click();
    });
    after(async function () {
        await driver.quit();
    });
    it('should region be Frankfurt', async function () {
        const region = await driver.findElement(calcPage.checkRegion).getText();
        expect(region).to.be.equal('Region: Frankfurt');
    });
    it('should instance type be n1 standart 8', async function () {
        const instanceType = await driver.findElement(calcPage.checkInstType).getText();
        expect(instanceType).to.be.include('Instance type: n1-standard-8');
    });
    it('should vm class be regular', async function () {
        const vmClass = await driver.findElement(calcPage.checkVMclass).getText();
        expect(vmClass).to.be.equal('VM class: regular');
    });
    it('should local ssd be 2x375 GB', async function () {
        const localSsd = await driver.findElement(calcPage.checkLocSSD).getText();
        expect(localSsd).to.be.include('Local SSD: 2x375 GiB');
    });
    it('should commitment term be 1 year', async function () {
        const comTerm = await driver.findElement(calcPage.checkCommitedTerm).getText();
        expect(comTerm).to.be.equal('Commitment term: 1 Year');
    });
    it('should total sum be like in manual test', async function () {
        const sum = await driver.findElement(calcPage.checkLastSum).getText();
        expect(sum).to.be.include('Total Estimated Cost: USD 1,085.25 per 1 month');
    });
    it('should total sum the same as in mail', async function () {
        const sum = await driver.findElement(calcPage.checkLastSum).getText();
        await driver.findElement(calcPage.pushEmailBtn).click();
        const originalWindow = await driver.getWindowHandle(windowHandleBasepage);
        await driver.switchTo().newWindow('tab');
        await driver.get('https://yopmail.com/');
        await driver.wait(until.elementIsVisible(await driver.findElement(yopmailPage.pushRandomMailBtn)));
        await driver.findElement(yopmailPage.pushRandomMailBtn).click();
        await driver.findElement(yopmailPage.pushCopyBtn).click();
        const newWindow = await driver.getWindowHandle(windowHandleSecondPage);
        await driver.switchTo().window(originalWindow);
        await driver.switchTo().frame(await driver.findElement(calcPage.switchFirstFrame));
        await driver.switchTo().frame(await driver.findElement(calcPage.switchSecondFrame));
        await driver.findElement(calcPage.pushMailString).sendKeys(Key.CONTROL + 'V');
        await driver.wait(until.elementIsVisible(await driver.findElement(calcPage.pushSendMailBtn)));
        await driver.findElement(calcPage.pushSendMailBtn).click();
        await driver.switchTo().window(newWindow);
        await driver.findElement(yopmailPage.checkMailBtn).click();
        await driver.switchTo().frame(await driver.findElement(yopmailPage.switchMailFrame));
        const sumMail = await driver.findElement(yopmailPage.checkSumMail).getText();
        expect(sum).to.be.include(sumMail);
    });
});