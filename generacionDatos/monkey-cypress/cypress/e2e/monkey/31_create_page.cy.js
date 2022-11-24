import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');
const faker = require('faker');

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

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});

describe( `Ghost is under smarter monkeys`, function() {
    
    beforeEach(() => {
        ////EXAMPLE PSEUDO
        // try {
        //     // await DataPool.prepare(PoolOrigin.APriori, mockarooUrl);
            
        //     await DataPool.prepare(PoolOrigin.APriori, "./mocks/31.json");
        // } catch(e) {
        //     cy.log(e);
        //     return true;
        // }

        ////EXAMPLE APRIORI
        // cy.readFile('./mocks/31.json').then((fileData) => {
        //     DataPool.prepare(PoolOrigin.APriori, fileData);
        // })
        
        ////EXAMPLE RANDOM
        cy.readFile('./mock_structs/31.json').then((fileData) => {
            DataPool.prepare(PoolOrigin.Random, fileData);
        })
    });
    it(`Creates a new page`, function() { 
        feature = "Create_page"
        count = 0;

        cy.visit(url).then((win)=>{  
            login(username, pwd);
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
            cy.contains("Boom")
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})