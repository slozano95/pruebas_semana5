describe('Testing Create Member', () => {
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
        cy.wait(2000)
        cy.get('a[href*="#/members/new/"] > span').contains('New member').click()
        cy.wait(2000)
        cy.get('form').within(() => {
            cy.get('input[name="name"]').type('Leidy')
            cy.get('input[name="email"]').type('test')
            cy.get('button').contains('Save').click()
        })
    })
    // it('Click to Members', () => {
    //     cy.get('a[href*="#/members/"]').contains('Members').click()
    // })
    // it('Click to new Member', () => {
    //     cy.get('a[href*="#/members/new/"] > span').contains('New member').click()
    // })

    // it('Click to new Member and fill fields', () => {
    //     cy.get('form').within(() => {
    //         cy.get('input[name="name"]').type('Leidy')
    //         cy.get('input[name="email"]').type('test')
    //         cy.get('button').contains('Save').click()
    //     })
    // })
    // it('Click to Members', () => {
    //     cy.get('a[href*="#/members/"]').contains('Members').click();
    // })

    // it('Test form feedback', () => {
    //     cy.get('button.btn.btn-primary').click()
    //     cy.wait(1000)
    //     cy.get('div.invalid-feedback').then(($divs)=>{
    //         expect($divs.length).to.equal(4)
    //     })
    // })
    // it('Create an user and login', ()=>{
    //     cy.get('form').within(() => {
    //         cy.get('input[formcontrolname="firstName"]').type('Monitor')
    //         cy.get('input[formcontrolname="lastName"]').type('Pruebas')
    //         cy.get('input[formcontrolname="username"]').type('pruebas')
    //         cy.get('input[formcontrolname="password"]').type('MISO4208')
    //         cy.get('button.btn.btn-primary').click()
    //     })
    //     cy.wait(1000)
    //     //Redirected to login
    //     cy.get('div.alert.alert-success').should('be.visible')  
    //     cy.get('form').within(() => {
    //         cy.get('input[formcontrolname="username"]').type('pruebas')
    //         cy.get('input[formcontrolname="password"]').type('MISO4208')
    //         cy.get('button.btn.btn-primary').click()
    //     })
    //     cy.wait(1000)
    //     //logged in
    //     cy.get('h1').then(($header)=>{
    //         expect($header[0].innerText).to.equal('Hi Monitor!')
    //     })  
    // })
  })