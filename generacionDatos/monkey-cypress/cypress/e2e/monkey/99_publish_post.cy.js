/// <reference types="cypress" />
var faker = require('faker');

function randomString() {
    return faker.random.words(2);
}

function randomDescription() {
    return faker.random.words(5);
}

function randomSumary() {
    return faker.random.words(9);
}

describe('Testing Publica Post con destacado', () => {
beforeEach(()=>{ 
    cy.wait(2000)
})

var title = randomString();
var Description = randomDescription();
var sumary= randomSumary();
        
it('Publica Post', () => {
    cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
    
    cy.get('form').within(() => {
        cy.get('input[name="identification"]').type('richardacevedo98@gmail.com')
        cy.get('input[name="password"]').type('0123456789')
        cy.get('button[type="submit"]').click()
                
    })      

    cy.wait(2000)
    cy.get('a[href*= "#/posts/"]').contains('Posts').click();        
    cy.wait(1)
    
    cy.get('a[href*= "#/editor/post/"]').contains('New post').click();        
    cy.wait(1)

    cy.get('textarea[placeholder= "Post title"]');      
    cy.wait(1)

    cy.focused().type(title);
    cy.wait(1)

    cy.focused().type("{enter}") 
    cy.wait(1)

    cy.get('div[data-placeholder= "Begin writing your post..."]');
    cy.wait(1)

    cy.focused().type(Description);
    cy.wait(20)
                  
    cy.get('button[title="Settings"]').click();
    cy.wait(20) 
 
    cy.get('span[class="input-toggle-component"]').click();      
    cy.wait(20)

   cy.get('button[title="Settings"]').click();
    cy.wait(20) 

    cy.get('button[type="button"]').contains('Publish').click()
    cy.wait(20)

    cy.get('button[type="button"]').contains('Continue, final review →').click()
    cy.wait(1)

    cy.get('div[class="gh-publish-cta"]').contains('Publish & send, right now').click()
    cy.wait(1)

    cy.get('div[class="gh-publish-cta"]').contains('Publishing & sending').click()
    cy.wait(1)
 })

})






