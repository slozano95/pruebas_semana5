Feature: Ghost Login

@user1 @web
@avoid
Scenario: Login

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "<EMAIL>"
And I enter password "hola123456"
And I click sign in
And I wait for 5 seconds
