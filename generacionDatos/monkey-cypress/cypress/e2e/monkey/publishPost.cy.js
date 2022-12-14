/// <reference types="cypress" />
describe('Testing Publish Post', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })

    var feature = "";
    var functionality = "Post";
    var count = 0;
    var escenario = "PublishPost";
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

        cy.wait(2000)
        cy.get('a[href*= "#/posts/"]').contains('Posts').click();
        ss("clickOnLinkPost")
        cy.wait(200)
        
        cy.get('a[href*= "#/editor/post/"]').contains('New post').click();
        ss("clickOnLinknNewPost")
        cy.wait(20)

        cy.get('textarea[placeholder= "Post title"]').type('Aventuras en Manizales');
        ss("AgregarTitulo")
        cy.wait(20)

        cy.get('div[data-placeholder= "Begin writing your post..."]').type('Manizales es una ciudad de la región cafetera montañosa del oeste de Colombia. Es conocida por sus eventos culturales, las calles empinadas y las vistas del volcán Nevado del Ruiz cercano. La Plaza de Bolívar central tiene una escultura de un hombre-cóndor que honra al líder revolucionario Simón Bolívar');
        ss("AgregarDescripcion")
        cy.wait(20)
       
        cy.get('button[type="button"]').contains('Publish').click()
        ss("clickOnLinkPublish")
        cy.wait(20)

        cy.get('button[type="button"]').contains('Continue, final review →').click()
        ss("clickOnLinkPublishContinue")
        cy.wait(20)

        cy.get('div[class="gh-publish-cta"]').contains('Publish & send, right now').click()
        ss("clickOnLinkPublishPost")
        cy.wait(20)

        cy.get('div[class="gh-publish-cta"]').contains('Publishing & sending').click()
        ss("clickOnLinkPublishPostConfirmado")
        cy.wait(200)
    })
    })

   


 
    
