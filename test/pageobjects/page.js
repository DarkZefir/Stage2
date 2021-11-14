
module.exports = class Page {

    open() {
        return browser.url(`https://cloud.google.com/`);
    }

    async clickAndWait(element, timeout) {
        await element.waitForClickable({ timeout });
        await element.click();
    }
}
