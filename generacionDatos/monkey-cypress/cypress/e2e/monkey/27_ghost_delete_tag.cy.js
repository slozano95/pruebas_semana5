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
context('Delete tag with common data', () => {
  beforeEach(async() => {        
    try {
      await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
      nombreTag =  DataPool.get("NameTag");                
      slugTag = DataPool.get("SlugTag");
      descriptionTag = DataPool.get("DescriptionTag");      
     } catch(e) {
      return true;
    }
  })
describe('new tag ghost', () => {

  var feature = "";
  var functionality = "Tags";
  var count = 0;
  var escenario = "DeleteTag";
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
      cy.get('header > div > div > a[href*="#/tags/"]').click()
      ss("TagValidacion")

      cy.wait(1000);
      cy.get('a[href*="#/tags/'+slugTag+'/"] > h3').contains(nombreTag).click()     
      ss("Tag")

      cy.wait(1000);
      cy.get('button>span').contains("Delete tag").click()
      ss("DeleteTag")

      cy.wait(1000);
      cy.get('div[class="modal-footer"] > button > span').contains('Delete').click()
      ss("Delete")
      
      cy.wait(1000);
      //cy.get('a[href*="#/tags/'+slugTag+'/"] > h3').contains(nombreTag).click()     
      //cy.get('a[href*="#/tags/'+slugTag+'/"] > h3').contains(nombreTag).should('not.exist')   
      ss("Tag")

      cy.wait(1000);

    })
  }) 
})