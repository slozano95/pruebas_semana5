/// <reference types="cypress" />
var faker = require("faker");

  function randomString() {
    return faker.random.words(2);
  }
  
  function randomDescription() {
    return faker.random.words(5);
  }

  describe("Testing UnPublish Post", () => {
    beforeEach(() => {
      cy.wait(2000);
    });

    var title = randomString();
    var Description = randomDescription();

  it("Login", () => {
    cy.visit("https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin");

    cy.get("form").within(() => {
      cy.get('input[name="identification"]').type("richardacevedo98@gmail.com");
      cy.get('input[name="password"]').type("0123456789");
      cy.get('button[type="submit"]').click();
    });

    cy.wait(2000);
    cy.get('a[href*= "#/posts/"]').contains("Posts").click();
    cy.wait(200);

    cy.get('a[href*= "#/editor/post/"]').contains("New post").click();
    cy.wait(20);

    cy.get('textarea[placeholder= "Post title"]');
    cy.wait(1);

    cy.focused().type(title);
    cy.wait(1);

    cy.focused().type("{enter}");
    cy.wait(1);

    cy.get('div[data-placeholder= "Begin writing your post..."]');
    cy.wait(1);

    cy.focused().type(Description);
    cy.wait(20);

    cy.get('button[type="button"]').contains("Publish").click();
    cy.wait(20);

    cy.get('button[type="button"]').contains("Continue, final review →").click();
    cy.wait(20);

    cy.get('div[class="gh-publish-cta"]').contains("Publish & send, right now").click();
    cy.wait(20);

    cy.get('button[class="gh-back-to-editor"]').contains("Back to editor").click();
    cy.wait(20);

    cy.get('button[class="gh-btn gh-btn-editor darkgrey gh-unpublish-trigger"]').contains("Unpublish").click();
    cy.wait(20);

    cy.get('button[class="gh-revert-to-draft"]').contains("Unpublish and revert to private draft →").click();
    cy.wait(20);
  });
});
