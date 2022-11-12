/// <reference types="cypress" />

const faker = require('@faker-js/faker')

context('Editar tag for name is long with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  describe('Edit tag name long ghost', () => {
    
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
      .type('This is mostly used together with another selector to select the first element in a group mas de lo que puede' )
      .should('have.value', 'This is mostly used together with another selector to select the first element in a group mas de lo que puede')

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
      cy.get('a[href*="#/tags/sssdad/"] > h3').contains("This is mostly used together with another selector to select the first element in a group mas de lo que puede").click()

      cy.wait(1000);
      cy.get('#tag-name').clear();
      cy.get('#tag-name')
      .type('nueva actualizacion' )
      .should('have.value', 'nueva actualizacion')

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type('Actualizado' )
      .should('have.value', 'Actualizado')

      cy.get('#tag-description').clear();
      cy.get('#tag-description')
      .type('actualización de la descripcion' )
      .should('have.value', 'actualización de la descripcion')

      cy.get('button>span').contains("Save").click()

    })
  }) 
})