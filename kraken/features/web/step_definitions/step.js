const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert')
const https = require('https');
// ------------------
//  Login
// ------------------
Given('I prepare the data pool', async function() {
    let url = "https://api.mockaroo.com/api/0dd16450?count=1&key=94e8ade0";
    await https.get(url,(res) => {
        let body = "";
        res.on("data", (chunk) => {
            body += chunk;
        });
        res.on("end", () => {
            try {
                let json = JSON.parse(body);
                let dataSet = {
                    "EMAIL": json.user,
                    "PWD": json.password,
                    "URL": "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin",
                    "LONG_NAME_TAG":"solicitantes de empleo que preparan su currículum preparan su currículum preparan su currículum preparan su currículum" 
                }
                fs = require('fs');
                fs.writeFile('properties.json', JSON.stringify(dataSet), function (err) {
                    if (err) return console.log(err);
                });
            } catch (error) {
                console.error(error.message);
            };
        });
    }).on("error", (error) => {
        console.error(error.message);
        return false;
    });
});

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
});

Then('I see on the message incorrect login {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    let elements = await this.driver.$(".main-error");
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');    
    let flag = false;
    for(let i=0; i < elements.length; i++ ){
        if(elements[i].getText() == link){
            flag = true;
            assert.equal(elements[i].getText(), link);
        }
    }
});

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

When('I enter tag name {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (name, version, feature, escenario, name1) {
    let element = await this.driver.$('#tag-name');
    element.setValue(name);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name1 + '.png');
    return await element;
});

When('I enter tag slug {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#tag-slug');
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I enter tag description {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#tag-description');
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I click on the link variable {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {    
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png'); 
    await this.driver.$('*='+link).click();
})

When('I enter tag meta-title {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#meta-title');
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I enter tag meta-description {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#meta-description');
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I enter tag canonical-url {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$('#canonical-url');
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
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

When('I click on the button confirm delete tag named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/'+ version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$(".modal-footer > button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});

// ------------------
//  Feature Posts
// ------------------

When('I click in new post {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {    
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png'); 
    await this.driver.$('*='+link).click();
});

When('I click on the button post named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$('span*='+link).click();
});

When('I hit the tab key on the keyboard {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.keys("Tab");
});

When('I click on the button confirm delete post named {kraken-string} {kraken-string} {kraken-string}', async function (version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$(".modal-footer > button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
});

// ------------------
//  Feature Tags
// ------------------


When('I click on the pages links', async function() {
    let element = await this.driver.$('#ember73');
    return await element.click();
})

When('I click on the link named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) { 
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$('*='+link).click();
})

When('I click on the button named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$('span*='+link).click();
})

When('I type on the keyboard {kraken-string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str,version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.keys(str)
});

When('I click the button with class {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str, version, feature, escenario, name) {
    let element = await this.driver.$(str);
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element.click();
});
When('I write {kraken-string} on the input {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (str,str2, version, feature, escenario, name) {
    let element = await this.driver.$(str2);
    element.setValue(str);
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    return await element;
});

When('I click on the button confirm delete page named {string} {kraken-string} {kraken-string} {kraken-string} {kraken-string}', async function (link, version, feature, escenario, name) {
    this.driver.saveScreenshot('../Screenshots/' + version + '/' + feature + '/' + escenario + '/' + name + '.png');
    await this.driver.$(".modal-footer > button[class='gh-btn gh-btn-red gh-btn-icon ember-view'] > span").click();
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