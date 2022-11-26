/// <reference types="cypress" />
import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';

const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin"
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

let nombreTag="";
let slugTag="";
let descriptionTag="";
context('Create tag with common data', () => {
  beforeEach(() => {        
    cy.wait(1000);
    cy.readFile('./mocks/13.json').then((fileData) => {
      DataPool.prepare(PoolOrigin.APriori, fileData);
  })    
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
      cy.get('#tag-name')
        .type(DataPool.get("nombreTag"))        
      
      cy.wait(1000);
      cy.get('#tag-slug').clear();
      cy.get('#tag-slug')
      .type(DataPool.get("slugTag"))

      cy.get('#tag-description')
      .type(DataPool.get("descriptionTag"))
      ss("Descripcion")
      cy.get('button>span').contains("Save").click()
      
      cy.wait(1000);
      cy.get('button>span').should('contain', 'Saved')
      cy.wait(1000);
    })
  }) 
})