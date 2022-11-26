import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';
require('cypress-plugin-tab');

var mockarooUrl = "https://my.api.mockaroo.com/schema_member.json?key=d7c926a0";
const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin";
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});
describe(`Ghost`, function() {
    beforeEach(() => {
        cy.readFile('./mocks/79_members.json').then((fileData) => {
            DataPool.prepare(PoolOrigin.APriori, fileData);
        })
    });
    it(`Create a new member correctly`, function() { 
        cy.visit(url).then((win)=>{  
            waitSeconds(1);
            cy.get('form').within(() => {
                cy.get('input[name="identification"]').type(username)
                cy.get('input[name="password"]').type(DataPool.get("name"))
                cy.get('button[type="submit"]').click()
            })
            waitSeconds(1);
            cy.contains("Your password is incorrect.")
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})