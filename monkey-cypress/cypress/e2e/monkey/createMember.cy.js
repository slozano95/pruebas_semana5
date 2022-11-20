describe('Testing Create Member', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })
    it('Login', () => {
        cy.visit('https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin')
        
        cy.get('form').within(() => {
            cy.get('input[name="identification"]').type('richardacevedo98@gmail.com')
            cy.get('input[name="password"]').type('Richard*2605')
            cy.get('button[type="submit"]').click()
        })
        cy.wait(2000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/new/"] > span').contains('New member').click()
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('input[name="name"]').type('Richard')
            cy.get('input[name="email"]').type('richard@gmail.com')
        })
        cy.get('button > span').contains('Save').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
    })
})