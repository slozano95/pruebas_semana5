describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
      cy.visit('https://losestudiantes.co');
      cy.wait(1000);
      randomEvent(30);
  })
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function getRandomText(length) {
  var text = "";
  var options = "abcdefghijklmnopqrstuvwxyz ";
  for (var i = 0; i < length; i++){
    text += options.charAt(Math.floor(Math.random() * options.length));
  }
  return text;
}

function randomClick(monkeysLeft) {
  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
              cy.wrap(randomLink).click({force: true});
              monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(1000);
          randomClick(monkeysLeft);
      });
  }   
}
function randomClickOnLink() {
  cy.get('a').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({force: true});
    }
    cy.wait(1000);
  });
}
function randomClickOnButton() {
  cy.get('button').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({force: true});
    }
    cy.wait(1000);
  });
}
function randomFillOnField() {
  cy.get('input').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).type(getRandomText(getRandomInt(10,100)), {force: true})
    }
    cy.wait(1000);
  });
}
function randomCheckOnSelect() {
  cy.get('select').then($links => {
    var randomLink = $links.get(getRandomInt(0, $links.length));
    if(!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).select(getRandomInt(0,5), {force: true})
    }
    cy.wait(1000);
  });
}
function randomEvent(pendingEvents) {
  if(pendingEvents > 0) {
    var option = getRandomInt(1, 4);
    switch(option) {
      case 1:
        randomClickOnLink()
        break;
      case 2:
        randomClickOnButton()
        break;
      case 3:
          randomFillOnField()
          break;
      default:
        randomCheckOnSelect();
    }
    randomEvent(pendingEvents-1);
  }
}