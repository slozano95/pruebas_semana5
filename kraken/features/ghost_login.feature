Feature: Ghost Login

@user1 @web

Scenario: Login

Given I navigate to page "http://localhost:2368/ghost/#/signin"
And I wait for 2 seconds
When I enter email "slozano95@gmail.com"
And I enter password "hola123456"
And I click sign in
And I wait for 5 seconds