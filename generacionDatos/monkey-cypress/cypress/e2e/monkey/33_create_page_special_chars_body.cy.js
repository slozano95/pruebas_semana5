import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/"
const username = Cypress.config('username') || "slozano95@gmail.com";
const pwd = Cypress.config('password') || "hola123456";
var mockarooUrl = "https://api.mockaroo.com/api/1b8edba0?count=100&key=94e8ade0";

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});

describe(`Ghost is under smarter monkeys`, function() {

    beforeEach(async () => {
        try {
            await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
        } catch(e) {
            return true;
        }
    });
    
    it(`Creates a new page with special chars on the body`, function() { 
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