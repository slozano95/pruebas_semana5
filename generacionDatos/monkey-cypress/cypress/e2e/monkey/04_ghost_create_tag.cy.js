/// <reference types="cypress" />
var faker = require('faker');

let nombreTag="";
let slugTag="";
let descriptionTag="";
context('Create tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);
    nombreTag = faker.random.alpha(191);                
    slugTag = faker.random.alpha(195);
    descriptionTag = faker.lorem.lines(1);
  })


  var feature = "";
  var functionality = "Tags";
  var count = 0;
  var escenario = "CreateTag";
  var version = "5.22.10";
  
  function ss(action) {
  count += 1;
  cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+escenario+'/'+'/'+count+"_"+action)
  }


  describe('Create new tag ghost', () => {
    
    it('Login', () => {
      cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
      
      cy.get('form').within(() => {
          cy.get('input[name="identification"]').type('richardacevedo98@gmail.com')
          cy.get('input[name="password"]').type('0123456789')
          cy.get('button[type="submit"]').click()                    
      }) 
      
      ss("login")
      
      cy.get('a[href*="#/tags/"]').click()
      cy.wait(1000);
      cy.get('header > section > a[href*="#/tags/new/"]').click()
      ss("clickTag")
        
      cy.wait(1000);
      cy.get('#tag-name')
      .type(nombreTag)
      .should('have.value', nombreTag)
      ss("TagValue")

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type(slugTag)
      .should('have.value', slugTag)
      ss("TagValueSlug")

      cy.get('#tag-description')
      .type(descriptionTag)
      .should('have.value', descriptionTag)
      ss("Descripcion")
      cy.get('button>span').contains("Save").click()
      ss("Save")
      cy.wait(1000);      
      cy.get('p[class="response"]').should('contain', 'URL cannot be longer than 191 characters.')
      cy.wait(1000);
    })
  }) 
})