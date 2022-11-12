/// <reference types="cypress" />

const faker = require('@faker-js/faker')

context('Editar meta data tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  describe('Edit meta data tag ghost', () => {
    
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
      cy.get('button>span').contains("Expand").click()

      cy.wait(1000);
      cy.get('#meta-title').clear();
      cy.get('#meta-title')
      .type('titulo metadata' )
      .should('have.value', 'titulo metadata')

      cy.wait(1000);
      cy.get('#meta-description').clear();
      cy.get('#meta-description')
      .type('La informacion de la metadata larga' )
      .should('have.value', 'La informacion de la metadata larga')

      cy.get('#canonical-url').clear();
      cy.get('#canonical-url')
      .type('https://pruebadeurl.com.co' )
      .should('have.value', 'https://pruebadeurl.com.co')

      cy.get('button>span').contains("Save").click()

    })
  }) 
})