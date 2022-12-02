
export function login(username, pwd) {
    cy.get('input').then($links => {
        var randomLink = $links.get(0);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type(username, {force: true})
        }
        // cy.wait(1000);
      });
    cy.get('input').then($links => {
        var randomLink = $links.get(1);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type(pwd, {force: true})
        }
        // cy.wait(1100);
      });
    cy.get('button').then($links => {
        var randomLink = $links.get(1);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
        }
        // cy.wait(1200);
      });
    cy.wait(5000)
    // ss("login")
}

export function clickOnLink(str) {
    cy.get('a').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    // ss("clickOnLink_"+str)
}
export function clickOnButton(str) {
    cy.get('span').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    // ss("clickOnButton_"+str)
}
export function clickOnRawButton(str) {
    cy.get('button').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    // ss("clickOnRawButton_"+str)
}

export function waitSeconds(time) {
    var t = time;
    cy.wait(t*1000)
    // ss("wait_"+time.toString())
}

export function randomString() {
    return faker.random.words(2);
}