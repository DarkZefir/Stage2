
module.exports = class Page {
    open() {
        return browser.url('https://pastebin.com'), browser.maximizeWindow();
    };
};
