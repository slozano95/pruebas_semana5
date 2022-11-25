/// <reference types="cypress" />
var faker = require('faker');

let nombreTag="";
let slugTag="";
let descriptionTag="";
let newNombreTag="";
let newSlugTag="";
let newDescriptionTag="";
context('Editar tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);
    nombreTag = faker.random.alpha(10);                
    slugTag = faker.random.alpha(5);
    descriptionTag = faker.random.alpha(100);
    newNombreTag = faker.random.alpha(2)
    newSlugTag = faker.random.alpha(3);
    newDescriptionTag= faker.random.alpha(100);
  })

  describe('Edit tag ghost', () => {

    var feature = "";
    var functionality = "Tags";
    var count = 0;
    var escenario = "EditTag";
    var version = "5.22.10";
    
    function ss(action) {
    count += 1;
    cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+escenario+'/'+'/'+count+"_"+action)
    }
    
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
      ss("Save")
      
      cy.get('button>span').contains("Save").click()
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Saved')
      
      cy.wait(1000);
      cy.get('header > div > div > a[href*="#/tags/"]').click()

      cy.wait(1000);
      cy.get('a[href*="#/tags/'+slugTag+'/"] > h3').contains(nombreTag).click()

      cy.wait(1000);
      cy.get('#tag-name').clear();
      cy.get('#tag-name')
      .type(newNombreTag)
      .should('have.value', newNombreTag)
      ss("NuevoActualizado")

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type(newSlugTag)
      .should('have.value', newSlugTag)
      ss("Actualizado")

      cy.get('#tag-description').clear();
      cy.get('#tag-description')
      .type(newDescriptionTag)
      .should('have.value', newDescriptionTag)
      ss("ActualizadoConfirmado")

      cy.get('button>span').contains("Save").click()
      ss("SaveConfirmar")
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Saved')
      cy.wait(1000);
    })
  }) 
})