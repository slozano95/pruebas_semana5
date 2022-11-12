/// <reference types="cypress" />
describe('Testing Edit Post', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })
    
    it('Edit', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('lt.beltranr1@uniandes.edu.co')
            cy.get('input[name="password"]').type('Alemania15')
            cy.get('button[type="submit"]').click()
                    
        })

        cy.wait(2000)
        cy.get('a[href*= "#/posts/?type=draft"]').contains('Drafts').click();
        //cy.wait(200)
        
        //cy.get('section > ol > li > a[href*="#/editor/post/636f04027b65794188cf2251/"] > span[title="Go to Editor"] > svg > title').contains('Go to Editor').click();
        
        //cy.get('section > ol > li > a > span[title="Go to Editor"] > svg > title').contains('Go to Editor').click();
        cy.wait(200)

        cy.get('textarea[placeholder= "Post title"]').type('Aventuras en Cartagena');
        cy.wait(200)

        cy.get('div[data-placeholder= "Begin writing your post..."]').type('Manizales es una ciudad de la región cafetera montañosa del oeste de Colombia. Es conocida por sus eventos culturales, las calles empinadas y las vistas del volcán Nevado del Ruiz cercano.');
        cy.wait(20)
       
        cy.get('a[href*= "#/posts/"]').contains('Posts').click();
        cy.wait(200)

    })

    })

   


 
    
