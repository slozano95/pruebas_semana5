/// <reference types="cypress" />
import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';

var mockarooUrl = "https://my.api.mockaroo.com/users.json?key=79ad7410";
const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin"
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

let nombreTag="";
let slugTag="";
let descriptionTag="";
context('Create tag with common data', () => {
  beforeEach(async() => {        
    try {
      await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
      nombreTag =  DataPool.get("NameTagWhiteSpace");                
      slugTag = DataPool.get("SlugTagWhiteSpace");
      descriptionTag = DataPool.get("DescriptionTagWhiteSpace");      
     } catch(e) {
      return true;
    }
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
      cy.visit(url)      
      login(username, pwd);        
      ss("login")
      
      cy.get('a[href*="#/tags/"]').click()
      cy.wait(1000);
      cy.get('header > section > a[href*="#/tags/new/"]').click()
      ss("clickTag")
        
      cy.wait(1000);
      cy.get('#tag-name').clear();
      ss("TagValue")

      cy.wait(1000);
      cy.get('#tag-slug').clear();     
      ss("TagValueSlug")

      cy.wait(1000);
      cy.get('#tag-description').clear()
      
      ss("Descripcion")
      cy.get('button>span').contains("Save").click()
      ss("Save")
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Retry')
      cy.wait(1000);
      cy.get('p[class="response"]').should('contain', 'You must specify a name for the tag.')
      cy.wait(1000);
    })
  }) 
})