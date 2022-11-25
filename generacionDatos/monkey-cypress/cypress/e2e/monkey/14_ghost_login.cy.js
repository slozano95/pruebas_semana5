/// <reference types="cypress" />
var faker = require('faker');


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
        cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
        
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type(faker.internet.email())
            cy.get('input[name="password"]').type(faker.random.alphaNumeric(8))
            cy.get('button[type="submit"]').click()
        })
        ss("login")   
        cy.wait(2000)
        cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
        ss("IncorrectPassword")

    })
})