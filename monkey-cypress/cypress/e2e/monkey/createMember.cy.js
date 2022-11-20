context('Testing Create Member', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })

    describe('Edit Create Member', () => {
        var feature = "";
        var functionality = "Member";
        var count = 0;
        var escenario = "CreateMember";
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

        cy.get('a[href*="#/members/"]').contains('Members').click()
        ss("ClickMember") 
        cy.wait(1000)

        cy.get('a[href*="#/members/new/"] > span').contains('New member').click()
        ss("ClickNewMember") 
        cy.wait(1000)
        cy.get('form').within(() => {
            cy.get('input[name="name"]').type('Richard')
            cy.get('input[name="email"]').type('richard1@gmail.com')
        })
        cy.get('button > span').contains('Save').click()
        ss("ClickSave")        
        cy.wait(1000)
        
        cy.get('a[href*="#/members/"]').contains('Members').click()
        ss("ClickConfirmacion") 
    })
})
})