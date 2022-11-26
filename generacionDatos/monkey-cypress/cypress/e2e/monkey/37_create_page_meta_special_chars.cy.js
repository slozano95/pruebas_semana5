import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');

const url = Cypress.config('baseUrl') || "http://localhost:2368/ghost/"
const username = Cypress.config('username') || "slozano95@gmail.com";
const pwd = Cypress.config('password') || "hola123456";
var mockarooUrl = "https://api.mockaroo.com/api/51c09360?count=100&key=94e8ade0";

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
            return false;
        }
    });
    
    it('Creates page with custom meta url and special chars', function() { 
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
            cy.get('.post-setting-canonicalUrl').type(DataPool.get("url"))
            cy.get('body').tab()
            cy.contains("Please enter a valid URL")
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})