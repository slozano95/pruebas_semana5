/// <reference types="cypress" />

const faker = require('@faker-js/faker')

context('Delete tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  describe('delete tag ghost', () => {
    
    it('login ghost', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('#ember6')
      .type('oa.sanchez2@uniandes.edu.co')
      .should('have.value', 'oa.sanchez2@uniandes.edu.co')      
      cy.get('#ember8')
      .type('Colombia12345')
      .should('have.value', 'Colombia12345')
      cy.get('#ember10').click()     
      
      cy.get('a[href*="#/tags/"]').click()
      cy.wait(1000);
      cy.get('a[href*="#/tags/new/"]').click()     
      
      cy.wait(1000);
      cy.get('#tag-name')
      .type('dasdasd' )
      .should('have.value', 'dasdasd')

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type('sssdad' )
      .should('have.value', 'sssdad')

      cy.get('#tag-description')
      .type('asdjkansdnashjvdadhavdgvasdagvdasndmasmkdbasgdvbasmdasbda' )
      .should('have.value', 'asdjkansdnashjvdadhavdgvasdagvdasndmasmkdbasgdvbasmdasbda')

      cy.get('button>span').contains("Save").click()
      
      cy.wait(1000);
      cy.get('header > div > div > a[href*="#/tags/"]').click()

      cy.wait(1000);
      cy.get('a[href*="#/tags/sssdad/"] > h3').contains("dasdasd").click()

      cy.wait(1000);
      cy.get('button>span').contains("Delete tag").click()

      cy.wait(1000);
      cy.get('div[class="modal-footer"] > button > span').contains('Delete').click()
      
    })
  }) 
})