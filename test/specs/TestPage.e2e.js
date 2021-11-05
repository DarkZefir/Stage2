const { expect } = require('chai');

const PastebinPage = require('../pageobjects/Pastebin.page');
const PastebinResultPage = require('../pageobjects/Result.page');

describe('My Login application', () => {
    const writeText = `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`;
    const textPasteName = 'how to gain dominance among developers';

    before(async function () {
        await PastebinPage.open();
        await PastebinPage.pushCookiesBtn.waitForClickable({ timeout: 3000 });
        await PastebinPage.pushCookiesBtn.click();
        await PastebinPage.findTextArea.waitForClickable({ timeout: 3000 });
        await PastebinPage.findTextArea.click();
        await PastebinPage.findTextArea.keys(writeText);
        await PastebinPage.hideBanner.waitForClickable({ timeout: 3000 });
        await PastebinPage.hideBanner.click();
        await PastebinPage.pushHighlightingBtn.waitForClickable({ timeout: 3000 });
        await PastebinPage.pushHighlightingBtn.click();
        await PastebinPage.pushBashBtn.click();
        await PastebinPage.pushExpirationBtn.click();
        await PastebinPage.push10MinBtn.click();
        await PastebinPage.pasteName.click();
        await PastebinPage.pasteName.keys(textPasteName);
        await PastebinPage.pasteName.keys('Enter');
    });

    it('should highlighting syntax to be equal Bash', async function () {
        const highlightingSyntax = await PastebinResultPage.highlightingText.getText();
        expect(highlightingSyntax).to.be.equal('Bash');
    });

    it('should go to pastebin and check the title', async function () {
        const title = await browser.getTitle();
        expect(title).to.be.equal("how to gain dominance among developers - Pastebin.com");
    });

    it('should bashtext equal text', async function () {
        const resultText = await PastebinResultPage.newTextArea.getText();
        const resultBashText = await PastebinResultPage.bashArea.getText();
        expect(resultText).to.be.include(resultBashText);
    });
});

