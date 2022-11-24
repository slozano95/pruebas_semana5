import { DataPool } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');
var faker = require('faker');

var feature = "";
var functionality = "Page";
var count = 1;
var escenario = "Page";
var version = "5.22.10";
var pool = {};
const url = "http://localhost:2368/ghost/"
var mockarooUrl = "https://api.mockaroo.com/api/bc053910?count=1&key=94e8ade0";
const username = "slozano95@gmail.com";
const pwd = "hola123456";

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});

describe(`Ghost is under smarter monkeys`, function() {
    beforeEach(async () => {
        // await DataPool.prepare(mockarooUrl);
        try {
            await DataPool.prepare(mockarooUrl);
        } catch(e) {
            cy.log(e);
            return false;
        }
    });
    //TODO reportar error con caracteres １２ no cuenta
    it('Creates page with custom url', function() { 
        var title = randomString();
        feature = "CreatePageCustomURL"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(title)
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(randomString())
            cy.get(`.settings-menu-toggle`).click({force:true});
            waitSeconds(1);
            cy.get('.post-setting-slug').clear({force: true});
            cy.get('.post-setting-slug').type(randomString(), {force: true});
            clickOnButton("Publish");
            clickOnButton("Continue");
            clickOnButton("Publish page");
            waitSeconds(1);
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})