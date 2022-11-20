const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')

// ------------------
//  Login
// ------------------

When('I enter email {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (email, version, feature, escenario, name) {
    let element = await this.driver.$("input[name='identification']");
    await element.setValue(email);
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I enter password {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (password, version, feature, escenario, name) {
    let element = await this.driver.$("input[name='password']");
    await element.setValue(password);
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I click sign in {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function(version, feature, escenario, name) {
    let element = await this.driver.$("button[type='submit']");
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element.click();
})

// ------------------
//  Feature Members
// ------------------

When('I enter member name {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (name, version, feature, escenario, name1) {
    let element = await this.driver.$('#member-name');
    await element.setValue(name);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name1 + '.png');
    return await element;
});

When('I enter member email {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#member-email');
    await element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');    
    return await element;
});

Then('I see on the message {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    let elements = await this.driver.$(".response");
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');    
    let flag = false;
    for(let i=0; i < elements.length; i++ ){
        if(elements[i].getText() == link){
            flag = true;
            assert.equal(elements[i].getText(), link);
        }
    }
});

When('I click on the button delete member named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');    
    await this.driver.$("span[class='red']").click();
});

When('I click on the button confirm delete member named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');    
    await this.driver.$("button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});

// ------------------
//  Feature Tags
// ------------------

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

When('I click on the link variable {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {    
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png'); 
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

When('I click on the button confirm delete tag named {string}', async function (link) {
    await this.driver.$(".modal-footer > button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});

// ------------------
//  Feature Posts
// ------------------

When('I click in new post {kraken-string}', async function (link) {    
    await this.driver.$('*='+link).click();
})

When('I click on the button post named {string}', async function (link) {
    await this.driver.$('span*='+link).click();
})

Then('I see on the message incorrect user {string}', async function (link) {
    let elements = await this.driver.$(".main-error");
    let flag = false;
    for(let i=0; i < elements.length; i++ ){
        if(elements[i].getText() == link){
            flag = true;
            assert.equal(elements[i].getText(), link);
        }
    }
});

When('I hit the tab key on the keyboard', async function () {
    await this.driver.keys("Tab");
})

When('I click on the button confirm delete post named {string}', async function (link) {
    await this.driver.$(".modal-footer > button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});












//Pages related
When('I click on the pages links', async function() {
    let element = await this.driver.$('#ember73');
    return await element.click();
})

When('I click on the link named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) { 
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$('*='+link).click();
})

//Revisar Crear miembro Incorrect
When('I click on the button named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$('span*='+link).click();
})

When('I type on the keyboard {kraken-string}', async function (str) {
    await this.driver.keys(str)
    
});

When('I click the button with class {string}', async function (str) {
    let element = await this.driver.$(str);
    return await element.click();
});
When('I write {kraken-string} on the input {string}', async function (str,str2) {
    let element = await this.driver.$(str2);
    return await element.setValue(str);
});



When('click menu profile', async function () {
    await this.driver.$(".pe-all > div[role*='button']").click();
});

When('I contrasena anterior {kraken-string}', async function (str) {
    let element = await this.driver.$('#user-password-old');
    return await element.setValue(str);
});


When('I enter user-password-new {kraken-string}', async function (str) {
    let element = await this.driver.$('#user-password-new');
    return await element.setValue(str);
});

When('I enter user-new-password-verification {kraken-string}', async function (str) {
    let element = await this.driver.$('#user-new-password-verification');
    return await element.setValue(str);
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