describe('locating elements', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('https://selectors.webdriveruniversity.com');
    });

    it('$ - locate element', async () => {
        await $('//a[@href="#portfolio"]').click();
        await $('[data-target="#portfolioModal1"]').click();

        await expect($('#portfolioModal1Label')).toHaveText('WEBDRIVERIO');
    });

    it('$$ - locate elements', async () => {
        const expectedTitles = ['#', 'First', 'Last', 'Handle', '1', '2', '3', 'Firstname', 'Lastname', 'Age'];
        const actualTitles: string[] = [];

        const tableHeaderTitles = await $$('//table//th');
        for (const title of tableHeaderTitles) {
            actualTitles.push(await title.getText());
        }
        await expect(expectedTitles).toEqual(actualTitles);
    });
});
