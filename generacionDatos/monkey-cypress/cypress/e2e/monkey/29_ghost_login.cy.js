/// <reference types="cypress" />
import { DataPool, PoolOrigin } from "./_datapool";
import {login, waitSeconds, clickOnButton, clickOnRawButton, clickOnLink} from './_shared_slr';

var mockarooUrl = "https://my.api.mockaroo.com/users.json?key=79ad7410";
const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin"
const username = Cypress.config('username') || "richardacevedo98@gmail.com";
const pwd = Cypress.config('password') || "0123456789";

let user ="";
let Password = "";
context('Testing Login Failed Member Because Incorrect password', () => {
    beforeEach(async()=>{
        try {
            await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
            user =  DataPool.get("UsuarioGhost");                
            Password = DataPool.get("PasswordGhost");
            
           } catch(e) {
            return true;
          }
    })

    var feature = "";
    var functionality = "Login";
    var count = 0;
    var escenario = "IncorrecPassword";
    var version = "5.22.10";
    
    function ss(action) {
    count += 1;
    cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+escenario+'/'+'/'+count+"_"+action)
    }

    describe('Login user and pass incorrect', () => {
    it('Login', () => {
        cy.visit(url)      
        login(user, Password);        
        ss("login")
        
        cy.wait(2000)
        cy.get('p[class="main-error"]').should('contain', 'There is no user with that email address.')
        ss("IncorrectPassword")

    })
}) 
})