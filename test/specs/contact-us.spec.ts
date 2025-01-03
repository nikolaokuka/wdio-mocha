describe('webdriveruniversity - contact us page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
        await browser.url('/Contact-Us/contactus.html');
    });

    it('valid submission - submit all information', async () => {
        const firstName = $('//*[@name="first_name"]');
        const lastName = $('//*[@name="last_name"]');
        const emailAddress = $('//*[@name="email"]');
        const message = $('//*[@name="message"]');
        const submitButton = $('//input[@value="SUBMIT"]');

        await firstName.setValue('Joe');
        await lastName.setValue('Blogs');
        await emailAddress.setValue('joe_blogs123@mail.com');
        await message.setValue('Hello, how are you?');


        // await browser.debug();
        await submitButton.click();

        const successSubmissionHeader = $('#contact_reply > h1');
        await expect(successSubmissionHeader).toHaveText('Thank You for your Message!');
    });

    it('invalid submission - not submit all information', async () => {
        const firstName = $('//*[@name="first_name"]');
        const lastName = $('//*[@name="last_name"]');
        const message = $('//*[@name="message"]');
        const submitButton = $('//input[@value="SUBMIT"]');

        await firstName.setValue('Joe');
        await lastName.setValue('Blogs');
        await message.setValue('Hello, how are you?');
        await submitButton.click();

        const body = $('body');
        await expect(body).toHaveText(expect.stringContaining('Error: all fields are required'));
        await expect(body).toHaveText(expect.stringContaining('Error: Invalid email address'));
    });
});
