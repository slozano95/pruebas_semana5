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
        cy.readFile('./mock_structs/87.json').then((fileData) => {
            DataPool.prepare(PoolOrigin.Random, fileData);
        })
    });
    it(`Create a new member correctly`, function() { 

        const email = DataPool.get("email");

        cy.visit(url).then((win)=>{  
            login(username, pwd);
            waitSeconds(1);
            cy.get('a[href*="#/members/"]').contains('Members').click()
            waitSeconds(1);
            cy.get('a[href*="#/members/new/"] > span').contains('New member').click()
            waitSeconds(1);
            cy.focused().type(" ")
            cy.tab();
            cy.focused().type(email)
            clickOnButton("Save");
            waitSeconds(1);
            cy.contains("Saved");
            waitSeconds(1);
            cy.get('a[href*="#/members/"]').contains('Members').click()
            waitSeconds(1);
            cy.get('tbody > tr > a > div > div > h3').contains(email).click();
            waitSeconds(1);
            cy.get('form').within(() => {
                cy.get('textarea[name="note"]').type(DataPool.get("note_long"))
            });
            clickOnButton("Save");
            waitSeconds(1);
            cy.contains("Note is too long.")
        })
        cy.wait(1000)
    })
   
    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })
})