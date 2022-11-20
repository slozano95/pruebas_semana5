Feature: Delete Member

@user1 @web
Scenario: Delete Member with common data

Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 5.22.10" "Member" "DeleteMember" "IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 5.22.10" "Member" "DeleteMember" "IngresarContrasena"
And I wait for 1 seconds
And I click sign in "Version 5.22.10" "Member" "DeleteMember" "ClickLogin"
And I wait for 2 seconds

And I click on the link named "Members" "Version 5.22.10" "Member" "DeleteMember" "ClickMiembros" 
And I wait for 1 seconds
And I click on the link named "New member" "Version 5.22.10" "Member" "DeleteMember" "ClickNuevo"
And I wait for 1 seconds
And I enter member name "$name_1" "Version 5.22.10" "Member" "DeleteMember" "IngresarNombre"
And I wait for 1 seconds
And I enter member email "$email_1" "Version 5.22.10" "Member" "DeleteMember" "IngresarEmailMiembro"
And I wait for 1 seconds
And I click on the button named "Save" "Version 5.22.10" "Member" "DeleteMember" "ClickGuardar"
And I wait for 1 seconds
And I click on the link named "Members" "Version 5.22.10" "Member" "DeleteMember" "ClickMiembrosValidacion" 
Then I wait for 2 seconds

And I click on the link variable "$$name_1" "Version 5.22.10" "Member" "DeleteMember" "ClickVariable" 
And I wait for 1 seconds
And I click on the button named "Delete member" "Version 5.22.10" "Member" "DeleteMember" "ClickEliminar"
And I wait for 1 seconds
And I click on the button delete member named "Delete member" "Version 5.22.10" "Member" "DeleteMember" "ClickEliminarM"
And I wait for 1 seconds
And I click on the button confirm delete member named "Delete member" "Version 5.22.10" "Member" "DeleteMember" "ClickEliminarMe"
And I wait for 1 seconds
And I click on the link named "Members" "Version 5.22.10" "Member" "DeleteMember" "ClickMiembrosValidacionM"
Then I wait for 5 seconds