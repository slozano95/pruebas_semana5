/// <reference types="cypress" />

const faker = require('@faker-js/faker')

context('Create tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  describe('new tag ghost', () => {
    
    it('login ghost', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember6')
      .type('oa.sanchez2@uniandes.edu.co')
      .should('have.value', 'oa.sanchez2@uniandes.edu.co')      
      cy.get('#ember8')
      .type('Colombia12345')
      .should('have.value', 'Colombia12345')
      cy.get('#ember10').click()     
      
      cy.wait(1000);
      cy.get('.pe-all > div[role*="button"]').click()

      cy.wait(1000);
      cy.get('ul[role*="menu"] > li > a').contains("Your profile").click() 

      cy.wait(1000);
      cy.get('#user-password-old')
      .type('Colombia12345')

      cy.wait(1000);
      cy.get('#user-password-new')
      .type('Colombia12345*')
      
      cy.wait(1000);
      cy.get('#user-new-password-verification')
      .type('Colombia12345*')
      
      cy.wait(1000);
      cy.get('button>span').contains("Change Password").click()
      
    })
  }) 
})