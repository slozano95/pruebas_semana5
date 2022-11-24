import { DataPool } from "./_datapool";
require('cypress-plugin-tab');
var faker = require('faker');

var feature = "";
var functionality = "Page";
var count = 1;
var escenario = "Page";
var version = "5.22.10";
var pool = {};
const url = "http://localhost:2368/ghost/"
var mockarooUrl = "https://api.mockaroo.com/api/ee85b900?count=100&key=94e8ade0";
// var mockarooUrl = "http://127.0.0.1:8888/mock_1.json";
const username = "slozano95@gmail.com";
const pwd = "hola123456";
function ss(_) {}

function login() {
    cy.get('input').then($links => {
        var randomLink = $links.get(0);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type(username, {force: true})
        }
        // cy.wait(1000);
      });
    cy.get('input').then($links => {
        var randomLink = $links.get(1);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type(pwd, {force: true})
        }
        // cy.wait(1100);
      });
    cy.get('button').then($links => {
        var randomLink = $links.get(1);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
        // cy.wait(1200);
      });
    cy.wait(5000)
    ss("login")
}

function clickOnLink(str) {
    cy.get('a').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnLink_"+str)
}
function clickOnButton(str) {
    cy.get('span').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnButton_"+str)
}
function clickOnRawButton(str) {
    cy.get('button').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnRawButton_"+str)
}

function waitSeconds(time) {
    var t = time;
    cy.wait(t*1000)
    ss("wait_"+time.toString())
}

function randomString() {
    return faker.random.words(2);
}
Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});

describe( `Ghost is under smarter monkeys`, function() {
    //Listeners
    cy.on('uncaught:exception', (err)=>{
        cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
        cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
        return false
    });
    cy.on('window:alert', (text)=>{
        cy.task('genericLog', {'message':`An alert was fired with the message: "${text}"`})
        cy.task('genericReport', {'html': `<p><strong>An alert was fired with the message: </strong>${text}</p>`});
    });
    cy.on('fail', (err)=>{
        cy.task('genericLog', {'message':`The test failed with the following error: ${err}`});
        cy.task('genericReport', {'html': `<p><strong>Test failed with the error: </strong>${err}</p>`});
        return false;
    });
    beforeEach(async () => {
        // await DataPool.prepare(mockarooUrl);
        try {
            await DataPool.prepare(mockarooUrl);
        } catch(e) {
            cy.log(e);
            return false;
        }
    });
    it(`Creates a new page`, function() { 
        feature = "Create_page"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(DataPool.get("title"))
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(DataPool.get("body"))
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