/// <reference types="cypress" />
describe('Testing Publish Post', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })
    
    it('Login', () => {
        cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
        
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('richardacevedo98@gmail.com')
            cy.get('input[name="password"]').type('0123456789')
            cy.get('button[type="submit"]').click()
                    
        })
       
        cy.wait(2000)
        cy.get('a[href*= "#/posts/"]').contains('Posts').click();
        cy.wait(200)
        
        cy.get('a[href*= "#/editor/post/"]').contains('New post').click();
        cy.wait(20)

        cy.get('textarea[placeholder= "Post title"]').type('Aventuras en Manizales');
        cy.wait(20)

        cy.get('div[data-placeholder= "Begin writing your post..."]').type('Manizales es una ciudad de la región cafetera montañosa del oeste de Colombia. Es conocida por sus eventos culturales, las calles empinadas y las vistas del volcán Nevado del Ruiz cercano. La Plaza de Bolívar central tiene una escultura de un hombre-cóndor que honra al líder revolucionario Simón Bolívar');
        cy.wait(20)
       
        cy.get('button[type="button"]').contains('Publish').click()
        cy.wait(20)

        cy.get('button[type="button"]').contains('Continue, final review →').click()
        cy.wait(200)

        cy.get('div[class="gh-publish-cta"]').contains('Publish post, right now').click()
        cy.wait(200)


    })

    })

   


 
    
