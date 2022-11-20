context('Testing Delete Member', () => {
    beforeEach(()=>{
        cy.wait(2000)
    })

    describe('Edit  Delete Member', () => {
        var feature = "";
        var functionality = "Member";
        var count = 0;
        var escenario = "DeleteMember";
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
            cy.get('input[name="name"]').type('Camilo')
            cy.get('input[name="email"]').type('camilo1@gmail.com')
        })

        cy.get('button > span').contains('Save').click()
        ss("ClickSave") 
        cy.wait(1000)

        cy.get('a[href*="#/members/"]').contains('Members').click()
        ss("ClickSaveConfirm") 
        cy.wait(1000)

        cy.get('tbody > tr > a > div > div > h3').contains('Camilo').click()
        ss("ClickConfirm") 
        cy.wait(1000)

        cy.get('span').contains('Actions').click()
        ss("ClickAction") 
        cy.wait(1000)

        cy.get('button > span[class="red"').contains('Delete member').click()
        ss("ClickDelete") 
        cy.wait(1000)

        cy.get('div[class="modal-footer"] > button > span').contains('Delete member').click()
        ss("ClickDeleteConfirmado")
        cy.wait(1000)

        cy.get('div[class="modal-footer"] > button > span').contains('Leave').click()
        ss("ClickLeave")
        cy.wait(1000)

        cy.get('a[href*="#/members/"]').contains('Members').click()
        ss("ClickMemberCinformado")
    })
})
})