/// <reference types="cypress" />
import { DataPool, PoolOrigin } from "./_datapool";
import {
    login,
    
} from "./_shared_slr";
require("cypress-plugin-tab");
var faker = require("faker");

var feature = "";
var functionality = "Post";
var count = 1;
var escenario = "Post";
var version = "5.22.10";
var pool = {};
const url = "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin";
var mockarooUrl = "https://my.api.mockaroo.com/post_normal.json?key=06be2f50";
const username = "richardacevedo98@gmail.com";
const pwd = "0123456789";

Cypress.on("uncaught:exception", (err) => {
    cy.task("logCommand", { message: `An exception occurred: ${err.message}` });
    cy.task("genericReport", {
        html: `<p><strong>Uncaught exception: </strong>${err}</p>`,
    });
    return false;
});

describe("Testing Create Post", () => {
    beforeEach(async () => {
        try {
            await DataPool.prepare(PoolOrigin.Pseudo, mockarooUrl);
        } catch (e) {
            cy.log(e);
            return false;
        }
    });

    it("Testing Create Post", () => {
        //Login
        cy.visit(url).then((win) => {
            login(username, pwd);

            cy.wait(2000);
            cy.get('a[href*= "#/posts/"]').contains("Posts").click();
            cy.wait(1);

            cy.get('a[href*= "#/editor/post/"]').contains("New post").click();
            cy.wait(1);

            cy.get('textarea[placeholder= "Post title"]');
            cy.wait(1);

            cy.focused().type(DataPool.get("title"))
            cy.wait(1);

            cy.focused().type("{enter}");
            cy.wait(1);

            cy.get('div[data-placeholder= "Begin writing your post..."]');
            cy.wait(1);

            cy.focused().type(DataPool.get("description"));
            cy.wait(1);

            cy.get('button[type="button"]').contains('Publish').click()
            cy.wait(10)
    
            cy.get('button[type="button"]').contains('Continue, final review →').click()
            cy.wait(1)
    
            cy.get('div[class="gh-publish-cta"]').contains('Publish & send, right now').click()
            cy.wait(1)
    
            cy.get('div[class="gh-publish-cta"]').contains('Publishing & sending').click()
            cy.wait(1)

            cy.get('a[href*= "#/posts/"]').contains("Posts").click();
            cy.wait(1);

        });
        cy.wait(1000)

    });

    afterEach(()=>{
        cy.log('logEnd')
        return false;
    })


})
