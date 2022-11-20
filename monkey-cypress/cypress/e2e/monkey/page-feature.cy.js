require('cypress-plugin-tab');
var faker = require('faker');

const url = Cypress.config('baseUrl') || "https://pruebasautomatizadas.digitalpress.blog/ghost/#/signin";

var feature = "";
var functionality = "Page";
var count = 1;
var version = "5.22.10";
function ss(action) {
    count += 1;
    cy.screenshot('/'+version+'/'+functionality+'/'+feature+'/'+count+"_"+action)
}

function login() {
    cy.get('input').then($links => {
        var randomLink = $links.get(0);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type("richardacevedo98@gmail.com", {force: true})
        }
        // cy.wait(1000);
      });
    cy.get('input').then($links => {
        var randomLink = $links.get(1);
        if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).type("0123456789", {force: true})
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
    ss("login")
}

function clickOnLink(str) {
    cy.get('a').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnLink_"+str)
}
function clickOnButton(str) {
    cy.get('span').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnButton_"+str)
}
function clickOnRawButton(str) {
    cy.get('button').then($links => {
        // console.log("LINKS");
        for (const data of $links) {
            //  console.log(data.textContent);
             if(data.textContent.includes(str)) {
                 cy.wrap(data).click({force: true});
             }
        }
    });
    ss("clickOnRawButton_"+str)
}

function waitSeconds(time) {
    var t = time + 2
    cy.wait(t*1000)
    ss("wait_"+time.toString())
}

function randomString() {
    return faker.random.words(2);
}
Cypress.on('uncaught:exception', (err)=>{
    cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
    cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
    return false
});
describe( `Ghost is under smarter monkeys`, function() {
    //Listeners
    cy.on('uncaught:exception', (err)=>{
        cy.task('logCommand', {'message':`An exception occurred: ${err.message}`})
        cy.task('genericReport', {'html': `<p><strong>Uncaught exception: </strong>${err}</p>`});
        return false
    });
    cy.on('window:alert', (text)=>{
        cy.task('genericLog', {'message':`An alert was fired with the message: "${text}"`})
        cy.task('genericReport', {'html': `<p><strong>An alert was fired with the message: </strong>${text}</p>`});
    });
    cy.on('fail', (err)=>{
        cy.task('genericLog', {'message':`The test failed with the following error: ${err}`});
        cy.task('genericReport', {'html': `<p><strong>Test failed with the error: </strong>${err}</p>`});
        return false;
    });
    it(`Unpublishes a page`, function() { 
        var title = randomString();
        feature = "CreatePageBasic"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(title)
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(randomString())
            clickOnButton("Publish");
            clickOnButton("Continue");
            clickOnButton("Publish page");
            waitSeconds(1);
            clickOnButton("Back to editor");
            clickOnButton("Unpublish");
            clickOnButton("Unpublish and revert");
        })
        cy.wait(1000)
    })
    it('Creates page with custom url', function() { 
        var title = randomString();
        feature = "CreatePageCustomURL"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(title)
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(randomString())
            cy.get(`.settings-menu-toggle`).click({force:true});
            waitSeconds(1);
            cy.get('.post-setting-slug').clear({force: true});
            cy.get('.post-setting-slug').type(randomString(), {force: true});
            clickOnButton("Publish");
            clickOnButton("Continue");
            clickOnButton("Publish page");
            waitSeconds(1);
        })
        cy.wait(1000)
    })
    it(`Deletes a page`, function() { 
        var title = randomString();
        feature = "DeletePage"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(title)
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(randomString())
            clickOnButton("Publish");
            clickOnButton("Continue");
            clickOnButton("Publish page");
            waitSeconds(1);
            clickOnButton("Back to editor");
            cy.get(`.settings-menu-toggle`).click({force:true})
            waitSeconds(1);
            clickOnButton("Delete page");
            waitSeconds(1);
            clickOnButton("Delete");
        })
        cy.wait(1000)
    })
    it(`Creates a new page`, function() { 
        feature = "UnpublishPage"
        count = 0;
        cy.visit(url).then((win)=>{  
            login();
            waitSeconds(1);
            clickOnLink("Pages");
            clickOnLink("New page");
            waitSeconds(1);
            cy.focused().type(randomString())
            waitSeconds(1);
            cy.focused().type("{enter}")
            waitSeconds(1);
            cy.focused().type(randomString())
            clickOnButton("Publish");
            clickOnButton("Continue");
            clickOnButton("Publish page");
            waitSeconds(1);
        })
        cy.wait(1000)
    })
    

    
    afterEach(()=>{
        cy.task('logEnd')
        return false;
    })
})