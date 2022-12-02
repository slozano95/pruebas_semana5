/// <reference types="cypress" />
var faker = require('faker');
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';

const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin"
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

context('Testing Login Failed Member Because Incorrect password', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })

    var feature = "";
    var functionality = "Login";
    var count = 0;
    var escenario = "IncorrecPassword";
    var version = "5.22.10";
    
    function ss(action) {
    count += 1;
    cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+escenario+'/'+'/'+count+"_"+action)
    }

    it('Login', () => {
        
        cy.visit(url)      
        login(faker.internet.email(), faker.random.alphaNumeric(8));      
        ss("login")  
        cy.wait(2000)
        cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
        ss("IncorrectPassword")

    })
})