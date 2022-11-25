import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/"
const username = Cypress.config('username') || "slozano95@gmail.com";
const pwd = Cypress.config('password') || "hola123456";

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});

describe(`Ghost is under smarter monkeys`, function() {
    beforeEach(() => {
        cy.readFile('./mock_structs/59.json').then((fileData) => {
            DataPool.prepare(PoolOrigin.Random, fileData);
        })
    });
    
    it('Creates page with meta description bigger than limit', function() { 
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
            cy.get(`.settings-menu-toggle`).click({force:true});
            waitSeconds(1);
            clickOnButton("Extra");
            cy.get('.post-setting-meta-description').type(DataPool.get("meta_description"))
            cy.get('body').tab()
            cy.contains("used 146")
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})