const { Builder, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();
const PastebinPage = require('../basePage/page/pastebinPage.js');
const PastebinResult = require('../basePage/page/pastebinResult.js');



describe('PastebinPage', async function () {
    const mainPage = new PastebinPage();
    const pageResult = new PastebinResult();


    before(async function () {
        await driver.get('https://pastebin.com');
        await driver.manage().window().maximize();
        await driver.sleep(2000);
        await driver.findElement(mainPage.pushCookiesBtn).click();
        await driver.findElement(mainPage.findTextArea).sendKeys(`git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force`, Key.RETURN);
        await driver.findElement(mainPage.hideBanner).click();
        await driver.findElement(mainPage.pushHighlightingBtn).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(mainPage.pushBashBtn)), 2000);
        await driver.findElement(mainPage.pushBashBtn).click();
        await driver.findElement(mainPage.pushExpirationBtn).click();
        await driver.wait(until.elementIsVisible(await driver.findElement(mainPage.push10MinBtn)), 2000);
        await driver.findElement(mainPage.push10MinBtn).click();
        await driver.findElement(mainPage.pasteName).sendKeys(mainPage.textPasteName, Key.RETURN);
        await driver.sleep(6000);
    });

    it('should go to pastebin and check the title', async function () {
        const title = await driver.getTitle();
        expect(title).to.be.equal("how to gain dominance among developers - Pastebin.com");
    });

    it('should highlighting to be equal Bash', async function () {
        const highlighting = await driver.findElement(pageResult.highlightingText).getText();
        expect(highlighting).to.be.equal('Bash');
    });

    it('should bashtext equal text', async function () {
        const resultText = await driver.findElement(pageResult.newTextArea).getText();
        const resultBashText = await driver.findElement(pageResult.bashArea).getText();
        expect(resultText).to.be.include(resultBashText);
    });

});