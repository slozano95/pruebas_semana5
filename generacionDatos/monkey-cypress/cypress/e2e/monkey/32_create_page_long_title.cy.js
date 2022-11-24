import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');

var mockarooUrl = "https://api.mockaroo.com/api/bc053910?count=100&key=94e8ade0";
const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/"
const username = Cypress.config('username') || "slozano95@gmail.com";
const pwd = Cypress.config('password') || "hola123456";

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});


describe(`Ghost is under smarter monkeys`, function() {
    beforeEach(async () => {
        try {
            await DataPool.prepare(PoolOrigin.Pseudo,  mockarooUrl);
        } catch(e) {
            return true;
        }
    });
    it(`Creates a new page with huge title`, function() { 
        cy.visit(url).then((win)=>{  
            login(username, pwd);
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(DataPool.get("title"))
            waitSeconds(1);
            cy.focused().tab().focus()
            waitSeconds(1);
            cy.focused().type(DataPool.get("body"))
            waitSeconds(1);
            cy.contains("Publish").should('not.exist')
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})