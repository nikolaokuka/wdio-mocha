describe('wait commands - examples', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Ajax-Loader/index.html');
    });

    it('pause command', async () => {
        const clickMeButton = $('//*[text()="CLICK ME!"]/..');

        await browser.pause(5000);
        await clickMeButton.click();
        await browser.pause(2000);
    });

    it('waitForClickable', async () => {
        const clickMeButton = $('#button1');

        await clickMeButton.waitForClickable();
        await clickMeButton.click();
        await browser.pause(2000);
    });

    it('waitForDisplayed', async () => {
        const clickMeButton = $('#button1');
        await clickMeButton.waitForDisplayed();
    });

    it('waitForExist', async () => {
        const clickMeButton = $('#button1');
        await clickMeButton.waitForExist();
    });

    it('waitUntil', async () => {
        await browser.url('/Accordion/index.html');

        const textAppearBox = $('#text-appear-box');
        await textAppearBox.waitUntil(
            async function (this: WebdriverIO.Element) {
                return (await this.getText()) === 'LOADING COMPLETE.';
            },
            {
                timeout: 15000,
                timeoutMsg: 'Expected text to be different after 15 seconds.',
            }
        );
    });
});
