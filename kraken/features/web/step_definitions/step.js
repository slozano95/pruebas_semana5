const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
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

When('I click the button with class {string}', async function (str) {
    let element = await this.driver.$(str);
    return await element.click();
});
When('I write {kraken-string} on the input {string}', async function (str,str2) {
    let element = await this.driver.$(str2);
    return await element.setValue(str);
});

//Page Tags
When('I enter tag name {kraken-string}', async function (name) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(name);
});

When('I enter tag slug {kraken-string}', async function (str) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(str);
});

When('I enter tag description {kraken-string}', async function (str) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(str);
});

When('I click on the link variable {kraken-string}', async function (link) {    
    await this.driver.$('*='+link).click();// partial link text
})

When('I enter tag meta-title {kraken-string}', async function (str) {
    let element = await this.driver.$('#meta-title');
    return await element.setValue(str);
});

When('I enter tag meta-description {kraken-string}', async function (str) {
    let element = await this.driver.$('#meta-description');
    return await element.setValue(str);
});

When('I enter tag canonical-url {kraken-string}', async function (str) {
    let element = await this.driver.$('#canonical-url');
    return await element.setValue(str);
});

Then('I check the toast contains {string}', async function (str) {
    let value = await this.driver.$('.gh-notifications').getText();
    console.log("VALUE IS "+value);
    assert.equal(value,str);
})


//Page Members
When('I enter member name {kraken-string}', async function (name) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(name);
});

When('I enter member email {kraken-string}', async function (str) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(str);
});

Then('I see on the message {string}', async function (link) {
    let elements = await this.driver.$(".response");
    let flag = false;
    for(let i=0; i < elements.length; i++ ){
        if(elements[i].getText() == link){
            flag = true;
            assert.equal(elements[i].getText(), link);
        }
    }
});

When('I click on the button delete member named {string}', async function (link) {
    await this.driver.$("span[class='red']").click();
});

When('I click on the button confirm delete member named {string}', async function (link) {
    await this.driver.$("button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});

Then('I see on the message incorrect login {string}', async function (link) {
    let elements = await this.driver.$(".main-error");
    let flag = false;
    for(let i=0; i < elements.length; i++ ){
        if(elements[i].getText() == link){
            flag = true;
            assert.equal(elements[i].getText(), link);
        }
    }
});