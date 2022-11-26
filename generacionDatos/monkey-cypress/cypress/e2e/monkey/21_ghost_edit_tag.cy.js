/// <reference types="cypress" />
import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';

var mockarooUrl = "https://my.api.mockaroo.com/users.json?key=79ad7410";
const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin"
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

let nameTagNew = "";
let slugTagNew = "";
context('Editar tag with common data', () => {
  beforeEach(async() => {        
    try {
      await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
      nameTagNew = DataPool.get("NameTag");
      slugTagNew = DataPool.get("SlugTag");
     } catch(e) {
      return true;
    }
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
      cy.visit(url)      
      login(username, pwd);        
      ss("login")
      
      cy.get('a[href*="#/tags/"]').click()
      cy.wait(1000);
      cy.get('header > section > a[href*="#/tags/new/"]').click()  
      ss("clickTag")  
      
      cy.wait(1000);
      cy.get('#tag-name')
      .type(nameTagNew)
      ss("TagValue")

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type(slugTagNew)
      ss("TagValueSlug")

      cy.get('#tag-description')
      .type(DataPool.get("DescriptionTag"))
      ss("Descripcion")
      
      cy.get('button>span').contains("Save").click()
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Saved')
      
      cy.wait(1000);
      cy.get('header > div > div > a[href*="#/tags/"]').click()

      cy.wait(1000);
      cy.get('a[href*="#/tags/'+slugTagNew+'/"] > h3').contains(nameTagNew).click()

      cy.wait(1000);
      cy.get('#tag-name').clear();
      cy.get('#tag-name')
      .type(DataPool.get("NameTag"))
      ss("NuevoActualizado")

      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type(DataPool.get("SlugTag"))
      ss("Actualizado")

      cy.get('#tag-description').clear();
      cy.get('#tag-description')
      .type(DataPool.get("DescriptionTag"))
      ss("ActualizadoConfirmado")

      cy.get('button>span').contains("Save").click()
      ss("SaveConfirmar")
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Saved')
      cy.wait(1000);
    })
  }) 
})