/// <reference types="cypress" />

context('Create tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);  
  })

  var feature = "";
  var functionality = "Login";
  var count = 0;
  var escenario = "CambiarPassword";
  var version = "5.22.10";
  function ss(action) {
  count += 1;
  cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+escenario+'/'+'/'+count+"_"+action)
  }

  describe('new tag ghost', () => {
    
    it('Login', () => {
      cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
      
      cy.get('form').within(() => {
          cy.get('input[name="identification"]').type('richardacevedo98@gmail.com')
          cy.get('input[name="password"]').type('Colombia12345*')
          cy.get('button[type="submit"]').click()                    
      })  
      ss("login")   
      
      cy.wait(1000);
      cy.get('.pe-all > div[role*="button"]').click()
      ss("clickTag")

      cy.wait(1000);
      cy.get('ul[role*="menu"] > li > a').contains("Your profile").click() 
      ss("ClickPorfile")

      cy.wait(1000);
      cy.get('#user-password-old')
      .type('Colombia12345*')     

      cy.wait(1000);
      cy.get('#user-password-new')
      .type('0123456789')
      
      cy.wait(1000);
      cy.get('#user-new-password-verification')
      .type('0123456789')
      
      cy.wait(1000);
      cy.get('button>span').contains("Change Password").click()
      ss("ChangePassword")
      
    })
  }) 
})