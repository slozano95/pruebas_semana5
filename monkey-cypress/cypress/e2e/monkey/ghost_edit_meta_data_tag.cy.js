/// <reference types="cypress" />

context('Editar meta data tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  describe('Edit meta data tag ghost', () => {

    var feature = "";
    var functionality = "Tags";
    var count = 0;
    var escenario = "EditMetaDataTag";
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
      cy.get('a[href*="#/tags/new/"]').click()
      ss("clickTag")     
      
      cy.wait(1000);
      cy.get('#tag-name')
      .type('dasdasd' )
      .should('have.value', 'dasdasd')
      ss("TagValue")

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type('sssdad' )
      .should('have.value', 'sssdad')
      ss("TagValueSlug")

      cy.get('#tag-description')
      .type('asdjkansdnashjvdadhavdgvasdagvdasndmasmkdbasgdvbasmdasbda' )
      .should('have.value', 'asdjkansdnashjvdadhavdgvasdagvdasndmasmkdbasgdvbasmdasbda')
      ss("Descripcion")
      cy.get('button>span').contains("Save").click()
      ss("Save")

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
      ss("Validation")

      cy.wait(1000);
      cy.get('#meta-description').clear();
      cy.get('#meta-description')
      .type('La informacion de la metadata larga' )
      .should('have.value', 'La informacion de la metadata larga')
      ss("Informacion")

      cy.get('#canonical-url').clear();
      cy.get('#canonical-url')
      .type('https://pruebadeurl.com.co' )
      .should('have.value', 'https://pruebadeurl.com.co')
      ss("Value")

      cy.get('button>span').contains("Save").click()
      ss("SaveConfirmar")

    })
  }) 
})