/// <reference types="cypress" />
describe('Testing Create Post', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })
    
    it('Login', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('lt.beltranr1@uniandes.edu.co')
            cy.get('input[name="password"]').type('Alemania15')
            cy.get('button[type="submit"]').click()
                    
        })
       
        cy.wait(2000)
        cy.get('a[href*= "#/posts/"]').contains('Posts').click();
        cy.wait(200)
        
        cy.get('a[href*= "#/editor/post/"]').contains('New post').click();
        cy.wait(200)

        cy.get('textarea[placeholder= "Post title"]').type('Aventuras en Manizales');
        cy.wait(200)

        cy.get('div[data-placeholder= "Begin writing your post..."]').type('Manizales es una ciudad de la región cafetera montañosa del oeste de Colombia. Es conocida por sus eventos culturales, las calles empinadas y las vistas del volcán Nevado del Ruiz cercano. La Plaza de Bolívar central tiene una escultura de un hombre-cóndor que honra al líder revolucionario Simón Bolívar');
        cy.wait(20)
       
        cy.get('a[href*= "#/posts/"]').contains('Posts').click();
        cy.wait(200)

    })

    })

   


 
    
