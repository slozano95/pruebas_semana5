describe('Testing Edit Member', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })
    it('Login', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        
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
            cy.get('input[name="name"]').type('Test')
            cy.get('input[name="email"]').type('test@gmail.com')
        })
        cy.get('button > span').contains('Save').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
        cy.wait(1000)
        cy.get('tbody > tr > a > div > div > h3').contains('Test').click()
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('input[name="name"]').type('Test 2')
        })
        cy.get('button > span').contains('Save').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
    })
})