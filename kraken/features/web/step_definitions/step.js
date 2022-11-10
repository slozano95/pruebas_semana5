const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#ember6');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#ember8');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('#ember10');
    
    return await element.click();
})

Then('I click on the first conversation', async function () {
    let element = await this.driver.$('.x1av1boa > div:nth-child(1) > div:nth-child(1)');
    return await element.click();
});

Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('p.xat24cr');
    return await element.click();
  });

Then('I send the message', async function () {
    let element = await this.driver.$('span.x3nfvp2:nth-child(3)');
    return await element.click();
});

//Pages related
When('I click on the pages links', async function() {
    let element = await this.driver.$('#ember73');
    return await element.click();
})
When('I click on the link named {string}', async function (link) {
    // await this.driver.$('='+link).click();//link text
    await this.driver.$('*='+link).click();// partial link text
})
When('I click on the button named {string}', async function (link) {
    await this.driver.$('span*='+link).click();
})
When('I type on the keyboard {kraken-string}', async function (str) {
    await this.driver.keys(str)
    
})
When('I hit the tab key on the keyboard', async function () {
    await this.driver.keys("Tab");
})
