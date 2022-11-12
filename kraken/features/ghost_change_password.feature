Feature: Login change password userCreate Member

@user1 @web
Scenario: Change password
//Login first
Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "<PWD>"
And I click sign in

And I wait for 1 seconds
And click menu profile

And I wait for 1 seconds
And I click on the link named "Your profile"

And I wait for 1 seconds
And I contrasena anterior "<PWD>"
And I wait for 1 seconds
And I enter user-password-new "<NEW_PASSWORD>"
And I wait for 1 seconds
And I enter user-new-password-verification "<NEW_PASSWORD>"

And I wait for 1 seconds
And I click on the button named "Change Password"

Then I wait for 5 seconds