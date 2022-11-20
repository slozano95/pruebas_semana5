context('Testing Create Failed Member', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })

    describe('Create Failed Member', () => {
        var feature = "";
        var functionality = "Member";
        var count = 0;
        var escenario = "CreateFailedMember";
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
            cy.get('input[name="email"]').type('richard')
        })
        cy.get('button > span').contains('Save').click()
        ss("ClickSave")         
        cy.wait(1000)

        cy.get('p[class="response"').eq(1).should('contain', 'Invalid Email.')
        ss("InvelidName") 
        cy.wait(1000)
    })
  })
})