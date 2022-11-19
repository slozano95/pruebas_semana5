Feature: Create Member

@user1 @web
Scenario: Create member with common data
//Given
Given I navigate to page "<URL>"
And I wait for 2 seconds
When I enter email "<EMAIL>" "Version 5.22.10" "Member" "CreateMemberIncorrect" "IngresarEmail"
And I wait for 1 seconds
And I enter password "<PWD>" "Version 5.22.10" "Member" "CreateMemberIncorrect" "IngresarContrasena"
And I wait for 1 seconds
And I click sign in "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickLogin"
And I wait for 2 seconds

And I click on the link named "Members" "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickMiembros" 
And I wait for 1 seconds
And I click on the link named "New member" "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickNuevo"
And I wait for 1 seconds
And I enter member name "$name_1" "Version 5.22.10" "Member" "CreateMemberIncorrect" "IngresarNombre"
And I wait for 1 seconds
And I enter member email "$name_1" "Version 5.22.10" "Member" "CreateMemberIncorrect" "IngresarEmailMiembro"
And I wait for 1 seconds
And I click on the button named "Save" "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickGuardar"
And I wait for 1 seconds
And I see on the message "Invalid Email." "Version 5.22.10" "Member" "CreateMemberIncorrect" "VerMensaje"
And I wait for 1 seconds
And I click on the link named "Members" "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickNombreMiembro"
And I wait for 1 seconds
And I click on the button named "Leave" "Version 5.22.10" "Member" "CreateMemberIncorrect" "ClickLeave"

Then I wait for 5 seconds