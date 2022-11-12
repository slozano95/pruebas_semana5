describe('Testing Login Failed Member Because Incorrect password', () => {
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
        cy.get('p[class="main-error"]').should('contain', 'Your password is incorrect.')
    })
})