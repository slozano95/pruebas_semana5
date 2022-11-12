describe('Testing Delete Member', () => {
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
            cy.get('input[name="name"]').type('Camilo')
            cy.get('input[name="email"]').type('camilo@gmail.com')
        })
        cy.get('button > span').contains('Save').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
        cy.wait(1000)
        cy.get('tbody > tr > a > div > div > h3').contains('Camilo').click()
        cy.wait(1000)
        cy.get('span').contains('Actions').click()
        cy.wait(1000)
        cy.get('button > span[class="red"').contains('Delete member').click()
        cy.wait(1000)
        cy.get('div[class="modal-footer"] > button > span').contains('Delete member').click()
        cy.wait(1000)
        cy.get('div[class="modal-footer"] > button > span').contains('Leave').click()
        cy.wait(1000)
        cy.get('a[href*="#/members/"]').contains('Members').click()
    })
})